# @angelamcosta/sort

[![npm version](https://badge.fury.io/js/%40angelamcosta%2Fsort.svg)](https://badge.fury.io/js/%40angelamcosta%2Fsort) ![example workflow](https://github.com/angelamcosta/npm_sort/actions/workflows/test.yml/badge.svg)

## Description 

@angelamcosta/sort is a JavaScript library that provides several sorting algorithms.

## Installation

```bash
npm install @angelamcosta/sort
```

## Usage

```javascript

const { bubbleSort } = require('@angelamcosta/sort');

const arr = [3, 6, 2, 1, 9];
const sortedArr = bubbleSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 6, 9]
```

## Algorithms

The following sorting algorithms are available in this library:

- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort (soon)
- Quick Sort (soon)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- [Angela Costa](https://github.com/angelamcosta)

## Support

If you have any questions or issues, please contact the author.

## Issues

If you find any bugs or have any suggestions, please file an [issue](https://github.com/angelamcosta/npm_sort/issues) here.