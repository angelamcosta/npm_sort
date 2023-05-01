exports.bubble_sort = function (list) {
	return sortList(list, (a, b) => a > b);
};

exports.bubble_sort_rev = function (list) {
	return sortList(list, (a, b) => a < b);
};

function sortList(list, compareFunc) {
	let cont = 0;
	let i = 0;

	while (i < list.length)
	{
		if (compareFunc(list[i], list[i + 1]))
		{
			let temp = list[i];
			list[i] = list[i + 1];
			list[i + 1] = temp;
			cont++;
		}
		i++;
	}

	if (cont > 0)
		return sortList(list, compareFunc);
	return (list);
}
