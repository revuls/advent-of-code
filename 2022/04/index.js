import { readFile } from '../../common/readFile.js';
import { isContained } from "./algorithm1.js";
import { isOverlapping } from './algorithm2.js';

const data = await readFile('./input');

let total = 0;
let totalOverlapping = 0;

data.split(/\r?\n/).forEach(input => {
  if (isContained(input)) total++;
  if (isOverlapping(input)) totalOverlapping++;
});

console.log(total);
console.log(totalOverlapping);
