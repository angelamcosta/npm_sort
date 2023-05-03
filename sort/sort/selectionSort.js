exports.selecSort = function (list) {
	let sortedList = [];
	let listIndex = 0;
	let len = list.length;
	
	while (len > 0) {
		let smallest = Infinity;
		for (let i = 0; i < list.length; i++) {
			if (list[i] < smallest) {
				smallest = list[i];
				listIndex = i;
			}
		}
		len--;
		sortedList.push(smallest);
		list.splice(listIndex, 1);
	}
	return (sortedList);
}