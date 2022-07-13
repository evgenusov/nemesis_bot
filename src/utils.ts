export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const getRandomItemFromArray = <T>(array: T[]) => {
  return array[getRandomInt(0, array.length)];
};

export const containsTriggerWords = (text: string, triggerWords: string[]) => {
  return triggerWords.some(triggerWord =>
    text.toLowerCase().includes(triggerWord.toLowerCase()),
  );
};
