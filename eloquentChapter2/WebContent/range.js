/**
 * 
 */
var arr = [];
function range(start,end,step){
	var j = 0;
	arraylength = Math.abs(start-end);
	if(!step) {step = 1;}
	if (start>end) 
	{
		i = end; 
		end = start;
		start = i;
		j = arraylength;
		for (i=start; i<=end;i++)
		{arr[j]= i;
		j-=1;
		}	
		return arr;
	} 
	for (i=start;i<=end;i=i+step){
		
		arr[j] = i;
		j+=1;
		
	}
	return arr;
}
//sumarr(range(10,12));



console.log(sumarr(range(5,2,-1)));

function sumarr(array){
	var c = 0;
	for(i=0;i<array.length;i++){
		
		c+=array[i];
	}
	return(c);

}
//console.log(sumarr(range(1,10)));