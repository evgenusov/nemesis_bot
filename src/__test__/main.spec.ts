import supertest from 'supertest';
import * as sendCommentWithChance from '../actions/sendCommentWithChance';
import {app} from '../app';
import {config} from '../config/config';
import {DTFApi} from '../services/DTFApi';
import {containsTriggerWords} from '../utils';

jest.useFakeTimers();

jest.mock('../services/DTFApi');

const DEFAULT_WEBHOOK = {
  id: 2102075,
  url: 'https://tjournal.ru/art/84125-na-noch-glyadya?comment=2102075',
  text: 'Это комментарий который содержит триггер слово Джилл',
  creator: {
    id: 1,
    avatar: 'https://leonardo.osnova.io/d49d71ab-f78a-db1d-b4c4-0c72b8fcda0e/',
    name: 'Ilya Chekalsky',
    url: 'https://tjournal.ru/u/1-ilya-chekalsky',
  },
  content: {
    id: 84125,
    title: 'На ночь глядя',
    url: 'https://tjournal.ru/art/84125-na-noch-glyadya',
    owner: {
      id: 214363,
      name: 'Арт и дизайн',
      avatar:
        'https://leonardo.osnova.io/357dedc0-c17e-2e05-e568-b7c383257091/',
      url: 'https://tjournal.ru/art',
    },
  },
  reply_to: null,
};

describe('all tests', () => {
  it('should find trigger words', () => {
    const text = 'Это комментарий который содержит триггер слово Джилл';
    const triggerWords = ['джилл'];
    const result = containsTriggerWords(text, triggerWords);
    expect(result).toBe(true);
  });

  it('should not find trigger words', () => {
    const text = 'Это комментарий который содержит триггер слово Леонардо';
    const triggerWords = ['джилл'];
    const result = containsTriggerWords(text, triggerWords);
    expect(result).toBe(false);
  });

  it('should trigger on comment with trigger word', async () => {
    const mockedSendCommentWithChance = jest.fn();
    jest
      .spyOn(sendCommentWithChance, 'sendCommentWithChance')
      .mockImplementation(mockedSendCommentWithChance);

    await supertest(app).post('/webhook').send({
      type: 'new_comment',
      data: DEFAULT_WEBHOOK,
    });
    expect(mockedSendCommentWithChance).toBeCalledTimes(1);
  });

  it('should not trigger on comment without trigger word', async () => {
    const mockedSendCommentWithChance = jest.fn();
    jest
      .spyOn(sendCommentWithChance, 'sendCommentWithChance')
      .mockImplementation(mockedSendCommentWithChance);

    await supertest(app)
      .post('/webhook')
      .send({
        type: 'new_comment',
        data: {
          ...DEFAULT_WEBHOOK,
          text: 'Это комментарий который не содержит триггер слово',
        },
      });
    expect(mockedSendCommentWithChance.mock.calls.length).toBe(0);
  });

  it('should trigger on comment without trigger word, but in allowed site', async () => {
    const mockedSendCommentWithChance = jest.fn();

    jest
      .spyOn(sendCommentWithChance, 'sendCommentWithChance')
      .mockImplementation(mockedSendCommentWithChance);

    const mockedWriteComment = jest.fn();
    jest.spyOn(DTFApi, 'writeComment').mockImplementation(mockedWriteComment);

    const modifiedWebhook = {
      ...DEFAULT_WEBHOOK,
      text: 'Это комментарий который не содержит триггер слово',
      content: {
        ...DEFAULT_WEBHOOK.content,
        owner: {
          ...DEFAULT_WEBHOOK.content.owner,
          url: config.SITE_URL,
        },
      },
    };

    for (let i = 0; i < 10; i++) {
      await supertest(app).post('/webhook').send({
        type: 'new_comment',
        data: modifiedWebhook,
      });
    }

    expect(mockedWriteComment.mock.calls.length).toBeLessThanOrEqual(3);
  });
});

afterEach(done => {
  done();
});

afterEach(() => {
  jest.clearAllMocks();
});
