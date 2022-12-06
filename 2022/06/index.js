import { readFile } from '../../common/readFile.js';
import { compute } from "./algorithm.js";

const data = await readFile('./input');

console.log(compute(data));
