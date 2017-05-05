// @flow

/**
 * Rotates an array
 *
 * @example
 * // returns [2, 3, 1]
 * circularShift([1, 2, 3], 1);
 * @example
 * // returns [3, 1, 2]
 * circularShift([1, 2, 3], -1);
 * @example
 * // returns [1, 2, 3]
 * circularShift([1, 2, 3], 0);
 * @example
 * // returns [1, 2, 3]
 * circularShift([1, 2, 3], 6);
 * @example
 * // returns [2, 3, 1]
 * circularShift([1, 2, 3], -3);
 */
function circularShift(array: any[], count: number): any[] {
  const clone: any[] = array.slice();
  return [...clone.splice(count % clone.length), ...clone];
}

module.exports = circularShift;
