/**
 * 
 */

function reversearray(array){
	arraylength = array.length;
	var newarr = array.slice(),  j  = arraylength;
	
	for (i=0;i<arraylength;i++)
		{
	
		a[i]=newarr[j-1];
		j-=1
		}
	
	return (a);
	
}
var a = [1 ,2 ,3, 4];
reversearray(a);
console.log(a);