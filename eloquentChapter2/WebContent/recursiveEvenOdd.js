/**
 * 
 */
function isEven(number){
	var absnumber = Math.abs(number);
	if (absnumber > 1) return isEven(absnumber-2);
	else return console.log(!Boolean(absnumber));
};

isEven(-30);