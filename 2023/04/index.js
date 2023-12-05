import { readFile } from '../../common/readFile.js';
import { getCardsPoints } from './algorithm1.js';
import { totalScratchCards } from './algorithm2.js';

const data = await readFile('./input');

let sum1 = 0;

data.split(/\r?\n/).forEach(input => {
  sum1 = sum1 + parseInt(Math.pow(2, getCardsPoints(input) - 1), 10);
});

console.log(sum1);
console.log(totalScratchCards(data));