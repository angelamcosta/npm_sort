exports.insertSort = function (list) {
	for (let i = 1; i < list.length; i++) {
		let j = i;
		while (j > 0 && list[j - 1] > list[j]) {
			let temp = list[j - 1];
			list[j - 1] = list[j];
			list[j] = temp;
			j--;
		}
	}
	return (list);
}