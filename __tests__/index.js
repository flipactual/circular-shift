const circularShift = require('../src');

const TEST_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const CASES = {
  0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  1: [2, 3, 4, 5, 6, 7, 8, 9, 0, 1],
  2: [3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
  3: [4, 5, 6, 7, 8, 9, 0, 1, 2, 3],
  4: [5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
  5: [6, 7, 8, 9, 0, 1, 2, 3, 4, 5],
  6: [7, 8, 9, 0, 1, 2, 3, 4, 5, 6],
  7: [8, 9, 0, 1, 2, 3, 4, 5, 6, 7],
  8: [9, 0, 1, 2, 3, 4, 5, 6, 7, 8],
  9: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  11: [2, 3, 4, 5, 6, 7, 8, 9, 0, 1],
  12: [3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
  13: [4, 5, 6, 7, 8, 9, 0, 1, 2, 3],
  14: [5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
  15: [6, 7, 8, 9, 0, 1, 2, 3, 4, 5],
  16: [7, 8, 9, 0, 1, 2, 3, 4, 5, 6],
  17: [8, 9, 0, 1, 2, 3, 4, 5, 6, 7],
  18: [9, 0, 1, 2, 3, 4, 5, 6, 7, 8],
  19: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  20: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  '-20': [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  '-19': [2, 3, 4, 5, 6, 7, 8, 9, 0, 1],
  '-18': [3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
  '-17': [4, 5, 6, 7, 8, 9, 0, 1, 2, 3],
  '-16': [5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
  '-15': [6, 7, 8, 9, 0, 1, 2, 3, 4, 5],
  '-14': [7, 8, 9, 0, 1, 2, 3, 4, 5, 6],
  '-13': [8, 9, 0, 1, 2, 3, 4, 5, 6, 7],
  '-12': [9, 0, 1, 2, 3, 4, 5, 6, 7, 8],
  '-11': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  '-10': [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  '-9': [2, 3, 4, 5, 6, 7, 8, 9, 0, 1],
  '-8': [3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
  '-7': [4, 5, 6, 7, 8, 9, 0, 1, 2, 3],
  '-6': [5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
  '-5': [6, 7, 8, 9, 0, 1, 2, 3, 4, 5],
  '-4': [7, 8, 9, 0, 1, 2, 3, 4, 5, 6],
  '-3': [8, 9, 0, 1, 2, 3, 4, 5, 6, 7],
  '-2': [9, 0, 1, 2, 3, 4, 5, 6, 7, 8],
  '-1': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
};

describe('circularShift', () => {
  Object.entries(CASES).forEach(([count, expected]) => {
    it(`rotates an array of ${TEST_ARRAY.length} by ${count}`, () => {
      expect(circularShift(TEST_ARRAY, count)).toEqual(expected);
    });
  });
});
