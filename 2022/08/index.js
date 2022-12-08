import { readFile } from '../../common/readFile.js';

import { part1 } from "./algorithm.js";
import { part2 } from "./algorithm2.js";

const data = await readFile('./input');

let treesMatrix = [];

data.split(/\r?\n/).forEach(input => {
  treesMatrix.push(input.split(''));
});

console.log(part1(treesMatrix));
console.log(part2(treesMatrix));
