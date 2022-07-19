export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const getRandomItemFromArray = <T>(array: T[]) => {
  return array[getRandomInt(0, array.length)];
};

export const containsTriggerWords = (text: string, triggerWords: string[]) => {
  const chunks = text.split(' ');
  return triggerWords.some(triggerWord => {
    return chunks.some(chunk => {
      return chunk.replace(/[^a-zа-я0-9]/gi, '').toLowerCase() === triggerWord.toLowerCase();
    });
  });
};
