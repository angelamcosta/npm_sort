const { insertSort } = require("../sort/insertSort");
const { selecSort } = require("../sort/selectionSort");
const { bubbleSort, bubbleSortRev } = require("../sort/bubbleSort");

test('bubbleSort: sorts an array of numbers in ASCENDING order', () => {
	const arr = [3, 6, 2, 1, 9];
	const sortedArr = bubbleSort(arr);
	expect(sortedArr).toEqual([1, 2, 3, 6, 9], 'expected [1, 2, 3, 6, 9] as result');
});

test('bubbleSort: returns an empty array when given an empty array', () => {
	const arr = [];
	const sortedArr = bubbleSort(arr);
	expect(sortedArr).toEqual([], 'expected [] as result');
})

test('bubbleSortRev: sorts an array of numbers in DESCENDING order', () => {
	const arr = [3, 6, 2, 1, 9];
	const sortedArr = bubbleSortRev(arr);
	expect(sortedArr).toEqual([9, 6, 3, 2, 1], 'expected [9, 6, 3, 2, 1] as result');
});

test('bubbleSortRev: returns an empty array when given an empty array', () => {
	const arr = [];
	const sortedArr = bubbleSortRev(arr);
	expect(sortedArr).toEqual([]);
})

test('selecSort: sorts an array of numbers in ASCENDING order', () => {
	const arr = [3, 6, 2, 1, 9];
	const sortedArr = selecSort(arr);
	expect(sortedArr).toEqual([1, 2, 3, 6, 9], 'expected [1, 2, 3, 6, 9] as result');
});

test('selecSort: returns an empty array when given an empty array', () => {
	const arr = [];
	const sortedArr = selecSort(arr);
	expect(sortedArr).toEqual([], 'expected [] as result');
})

test('insertSort: sorts an array of numbers in ASCENDING order', () => {
	const arr = [3, 6, 2, 1, 9];
	const sortedArr = insertSort(arr);
	expect(sortedArr).toEqual([1, 2, 3, 6, 9], 'expected [1, 2, 3, 6, 9] as result');
})

test('insertSort: returns an empty array when given an empty array', () => {
	const arr = [];
	const sortedArr = insertSort(arr);
	expect(sortedArr).toEqual([], 'expected [] as result');
})