import bodyParser from 'body-parser';
import express from 'express';
import {sendCommentWithChance} from './actions/sendCommentWithChance';
import {config} from './config/config';
import {IWebhook} from './types';
import {containsTriggerWords} from './utils';

export const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  try {
    const body: IWebhook = req.body;
    if (body.type === 'new_comment') {
      const commentsHasTriggerWord = containsTriggerWords(
        body.data.text,
        config.TRIGGER_WORDS,
      );

      if (body.data.content.owner.url === config.SITE_URL) {
        sendCommentWithChance(
          body.data.content.id,
          body.data.id,
          config.CHANCE_TO_SEND_COMMENT,
        );
      } else if (commentsHasTriggerWord) {
        sendCommentWithChance(body.data.content.id, body.data.id, 100);
      }
    }

    return res.status(200).json(body);
  } catch (e) {
    console.log('🚀 ~ file: app.ts ~ line 35 ~ app.post ~ e', e);
  }
});

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});
