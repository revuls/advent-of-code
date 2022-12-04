import { getPriority } from "./letters.js";

export const priority = rucksack => {
	let result = 0;

	[...rucksack[0]].forEach(letter => {
		if (rucksack[1].includes(letter) && rucksack[2].includes(letter)) {
			result = parseInt(getPriority(letter), 10);
		}
	});
	
	return result;
}