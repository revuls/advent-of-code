import { readFile } from '../../common/readFile.js';
import { getEngineSchematic as getEngineSchematic1 } from './algorithm1.js';
import { getEngineSchematic as getEngineSchematic2 } from './algorithm2.js';

const data = await readFile('./input');

console.log(getEngineSchematic1(data));
console.log(getEngineSchematic2(data));