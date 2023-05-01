const { bubbleSort, bubbleSortRev } = require('./sort');

test('sorts an array of numbers in ASCENDING order:', () => {
	const arr = [3, 6, 2, 1, 9];
	const sortedArr = bubbleSort(arr);
	expect(sortedArr).toEqual([1, 2, 3, 6, 9]);
});

test('returns an empty array when given an empty array (bubbleSort)', () => {
	const arr = [];
	const sortedArr = bubbleSort(arr);
	expect(sortedArr).toEqual([]);
})

test('sorts an array of numbers in DESCENDING order:', () => {
	const arr = [3, 6, 2, 1, 9];
	const sortedArr = bubbleSortRev(arr);
	expect(sortedArr).toEqual([9, 6, 3, 2, 1]);
});

test('returns an empty array when given an empty array (bubbleSortRev)', () => {
	const arr = [];
	const sortedArr = bubbleSortRev(arr);
	expect(sortedArr).toEqual([]);
})