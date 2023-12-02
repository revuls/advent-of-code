import { readFile } from '../../common/readFile.js';
import { getCalibratedNumber as getCalibratedNumber1 } from './algorithm1.js';
import { getCalibratedNumber as getCalibratedNumber2 } from './algorithm2.js';

const data = await readFile('./input');

let sum1 = 0;
let sum2 = 0;

data.split(/\r?\n/).forEach(input => {
  sum1 = sum1 + parseInt(getCalibratedNumber1(input));
  sum2 = sum2 + parseInt(getCalibratedNumber2(input));
});

console.log(sum1);
console.log(sum2);