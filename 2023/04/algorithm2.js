import { getCardsPoints } from './algorithm1.js';

export const totalScratchCards = data => {
  const dataMatrix = [];

  // Transform into matrix
  data.split(/\r?\n/).forEach((input, key) => {
    dataMatrix.push([input]);
  });

  const maxLengthCards = dataMatrix.length;

  let total = 0;

  for (let i = 0; i < dataMatrix.length; i++) {
    for (let j = 0; j < dataMatrix[i].length; j++) {
      const points = getCardsPoints(dataMatrix[i][j]);
      for (let n = 0; n < points; n++) {
        if (i + 1 + n < maxLengthCards) {
          dataMatrix[i + 1 + n].push(dataMatrix[i + 1 + n][0]);
        }
      }
      total++;
    }
  }

  return total;
}