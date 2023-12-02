import { readFile } from '../../common/readFile.js';
import { getPossibleGames } from './algorithm1.js';
import { getGamePower } from './algorithm2.js';

const data = await readFile('./input');

let sum1 = 0;
let sum2 = 0;

data.split(/\r?\n/).forEach(input => {
  sum1 = sum1 + parseInt(getPossibleGames(input));
  sum2 = sum2 + parseInt(getGamePower(input));
});

console.log(sum1);
console.log(sum2);