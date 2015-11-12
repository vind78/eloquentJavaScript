
 

function arrayToList(array)
	{
	var list ={};
	list.value = array[0],	array.shift();
	if (array.length) list.rest = arrayToList(array);
	else list.rest = null;
	return list;
	
	}
console.log(arrayToList([10,20,30]));