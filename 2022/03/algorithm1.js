import { getPriority } from "./letters.js";

export const priority = rucksack => {
	const firstWord = rucksack.substr(0, rucksack.length / 2);
	const secondWord = rucksack.substr((rucksack.length / 2), rucksack.length);

	let result = 0;

	[...firstWord].forEach(letter => {
		if (secondWord.includes(letter)) {
			result = parseInt(getPriority(letter), 10);
		}
	});
	
	return result;
}