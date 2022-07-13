import axios from 'axios';
import {config} from '../config/config';

interface IWriteComment {
  comment: string;
  articleId: number;
  replyId?: number;
}

type IAction = 'comment/add' | 'uploader/extract';

const getUrl = (action: IAction) => {
  return `${config.OCHOBA_URL}${action}`;
};

const DEFAULT_HEADERS = {
  'Content-Type': 'multipart/form-data',
  'X-Device-Token': config.DTF_API_KEY,
};

export const DTFApi = {
  writeComment: async ({comment, articleId, replyId = 0}: IWriteComment) => {
    return await axios.post(
      getUrl('comment/add'),
      {
        text: comment,
        id: articleId,
        replyId: replyId,
      },
      {
        headers: DEFAULT_HEADERS,
      },
    );
  },
};
