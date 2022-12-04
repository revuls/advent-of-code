import { readFile } from '../../common/readFile.js';
import { priority as priority1 } from "./algorithm1.js";
import { priority as priority2 } from "./algorithm2.js";

const data = await readFile('./input');

let total1 = 0;
let total2 = 0;

let counter = 0;
let groupElves = [];

data.split(/\r?\n/).forEach(input => {
  total1 += priority1(input);
	
	groupElves[counter] = input;
	if(counter === 2) {
		total2 += priority2(groupElves);
		counter = 0;
		groupElves = [];
	} else {
		counter++;
	}
});

console.log(total1);
console.log(total2);
