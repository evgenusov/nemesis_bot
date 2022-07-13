export interface IAttachment {
  type: 'image';
  data: {
    uuid: string;
    width: number;
    height: number;
    size: number;
    type: 'gif';
    color: string;
    hash: string;
    external_service: {
      name: 'giphy';
      id: string;
      mp4_url: string;
    };
  };
}

export const ATTACHMENTS: IAttachment[] = [
  {
    type: 'image',
    data: {
      uuid: 'fc1b820a-9e30-51d2-8351-2e98f8ccf0f6',
      width: 480,
      height: 270,
      size: 11942,
      type: 'gif',
      color: '',
      hash: '',
      external_service: {
        name: 'giphy',
        id: 'bfWkhSBWeq1CdAMnh8',
        mp4_url: 'https://media.giphy.com/media/bfWkhSBWeq1CdAMnh8/giphy.mp4',
      },
    },
  },
  {
    type: 'image',
    data: {
      uuid: 'e106ef55-bf5b-5c0d-b587-c40bcbf078a7',
      width: 480,
      height: 270,
      size: 35659,
      type: 'gif',
      color: '',
      hash: '',
      external_service: {
        name: 'giphy',
        id: 'Zao1SG5X4P0GF3xIaZ',
        mp4_url: 'https://media.giphy.com/media/Zao1SG5X4P0GF3xIaZ/giphy.mp4',
      },
    },
  },
  {
    type: 'image',
    data: {
      uuid: 'c37bbe44-6d52-5243-9921-3cd5417482c4',
      width: 480,
      height: 270,
      size: 30536,
      type: 'gif',
      color: '',
      hash: '',
      external_service: {
        name: 'giphy',
        id: 'YRVovRdy07LlObOjHb',
        mp4_url: 'https://media.giphy.com/media/YRVovRdy07LlObOjHb/giphy.mp4',
      },
    },
  },
  {
    type: 'image',
    data: {
      uuid: '80c608a7-069e-57c5-8286-f788b0c9c0bc',
      width: 480,
      height: 270,
      size: 23969,
      type: 'gif',
      color: '',
      hash: '',
      external_service: {
        name: 'giphy',
        id: 'MBrc0sNaUHh5Husfni',
        mp4_url: 'https://media.giphy.com/media/MBrc0sNaUHh5Husfni/giphy.mp4',
      },
    },
  },
  {
    type: 'image',
    data: {
      uuid: 'e913c48e-4343-5667-a08e-d57ade41b639',
      width: 480,
      height: 270,
      size: 56226,
      type: 'gif',
      color: '',
      hash: '',
      external_service: {
        name: 'giphy',
        id: 'hVIExiKWOSFHt4Ffku',
        mp4_url: 'https://media.giphy.com/media/hVIExiKWOSFHt4Ffku/giphy.mp4',
      },
    },
  },
];
