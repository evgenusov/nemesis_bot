import {PHRASES} from '../consts/phrases';
import {DTFApi} from '../services/DTFApi';
import {getRandomInt, getRandomItemFromArray} from '../utils';

export const sendCommentWithChance = async (
  articleId: number,
  replyId: number,
  chance: number,
) => {
  const randomInt = getRandomInt(1, 100);

  if (randomInt <= chance) {
    const randomPhrase = getRandomItemFromArray(PHRASES);

    try {
      return await DTFApi.writeComment({
        comment: randomPhrase,
        articleId,
        replyId,
      });
    } catch (e) {
      console.error('DTFApi.writeComment', e);
    }
  }
};
