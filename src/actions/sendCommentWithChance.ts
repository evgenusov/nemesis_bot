import {config} from '../config/config';
import {ATTACHMENTS} from '../consts/attachments';
import {PHRASES} from '../consts/phrases';
import {DTFApi} from '../services/DTFApi';
import {getRandomInt, getRandomItemFromArray} from '../utils';

export const sendCommentWithChance = async (
  articleId: number,
  replyId: number,
  chance: number,
) => {
  const randomInt = getRandomInt(1, 100);
  const randomToUseAttachment = getRandomInt(1, 100);

  if (randomInt <= chance) {
    const randomPhrase = getRandomItemFromArray(PHRASES);
    const attachments =
      randomToUseAttachment <= config.CHANCE_TO_USE_ATTACHMENTS
        ? [getRandomItemFromArray(ATTACHMENTS)]
        : undefined;

    try {
      return await DTFApi.writeComment({
        comment: randomPhrase,
        articleId,
        replyId,
        attachments,
      });
    } catch (e) {
      console.error('DTFApi.writeComment', e);
    }
  }
};
