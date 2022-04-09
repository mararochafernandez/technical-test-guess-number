import binarySearch from '../services/binary-search';

test('binarySearch(1, 10000000000, "-1") returns -1', () => {
  expect(binarySearch(1, 10000000000, '-1')).toBe(-1);
});

test('binarySearch(1, 10000000000, "0") returns -1', () => {
  expect(binarySearch(1, 10000000000, '0')).toBe(-1);
});

test('binarySearch(1, 10000000000, "1") returns 1', () => {
  expect(binarySearch(1, 10000000000, '1')).toBe(1);
});

test('binarySearch(1, 10000000000, "a") returns -1', () => {
  expect(binarySearch(1, 10000000000, 'a')).toBe(-1);
});

test('binarySearch(1, 10000000000, "9999999999") returns 9999999999', () => {
  expect(binarySearch(1, 10000000000, '9999999999')).toBe(9999999999);
});

test('binarySearch(1, 10000000000, "10000000000") returns 10000000000', () => {
  expect(binarySearch(1, 10000000000, '10000000000')).toBe(10000000000);
});

test('binarySearch(1, 10000000000, "10000000001") returns -1', () => {
  expect(binarySearch(1, 10000000000, '10000000001')).toBe(-1);
});
