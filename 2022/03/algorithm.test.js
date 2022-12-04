import { expect } from 'chai';
import { priority } from "./algorithm1.js";

describe('day 03', () => {
  context('part one', () => {
    [
      ['vJrwpWtwJgWrhcsFMMfFFhFp', 16],
      ['jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL', 38],
      ['PmmdzqPrVvPwwTWBwg', ''],
      ['wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn', 42],
      ['ttgJtRGJQctTZtZT', 22]
      ['CrZsJsPPZsGzwwsLwLmpwMDw]', 20],
    ].forEach(([ruckstack, value]) => {
      it(`should return ${value} when the ruckstack is ${ruckstack}`, async () => {
        expect(priority(ruckstack)).to.be.equal(value);
      });
    });
  });
});