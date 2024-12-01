import { readFile } from '../../common/readFile.js';
import { getTotalDistances as getTotalDistances1 } from './algorithm1.js';
import { getTotalDistances as getTotalDistances2 } from './algorithm2.js';

const data = await readFile('./input');

let distances = [];
const firstDistanceArray = [];
const secondDistanceArray = [];

data.split(/\r?\n/).forEach(input => {
  distances = input.split('   ');

  firstDistanceArray.push(parseInt(distances[0]));
  secondDistanceArray.push(parseInt(distances[1]));
});

console.log(getTotalDistances1(firstDistanceArray, secondDistanceArray));
console.log(getTotalDistances2(firstDistanceArray, secondDistanceArray));