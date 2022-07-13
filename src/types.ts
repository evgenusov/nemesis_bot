export interface IWebhook {
  type: string;
  data: {
    id: number;
    url: string;
    text: string;
    creator: {
      id: number;
      avatar: string;
      name: string;
      url: string;
    };
    content: {
      id: number;
      title: string;
      url: string;
      owner: {
        id: number;
        name: string;
        avatar: string;
        url: string;
      };
    };
    reply_to: null;
  };
}
