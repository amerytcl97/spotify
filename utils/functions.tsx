export const generateRandomString = (length: number): string => {
  let randomString: string = "";
  const params =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    randomString += params.charAt(Math.floor(Math.random() * params.length));
  }

  return randomString;
};

export const generateRandomHexColors = (): string => {
  let hexCode = "";
  const presetHex = "0123456789abcdef";

  for (let i = 0; i < 6; i++) {
    hexCode += presetHex.charAt(Math.floor(Math.random() * presetHex.length));
  }

  return `#${hexCode}`;
};

export const generateRandomGradient = (): string => {
  const randomDegree = Math.floor(Math.random() * 360);
  const hexColorsFrom = generateRandomHexColors();
  const hexColorsTo = generateRandomHexColors();

  const gradient = `linear-gradient(${randomDegree}deg, ${hexColorsFrom}, ${hexColorsTo})`;

  return gradient;
};

export const convertMsToMinSec = (ms: number): string => {
  const minutes: number = Math.floor(ms / 60000);
  const seconds: number = parseInt(((ms % 60000) / 1000).toFixed(0));
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};
