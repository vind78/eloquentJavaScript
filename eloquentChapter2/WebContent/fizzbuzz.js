/**
 * 3 is fizz
 * 5 is buzz
 * 3 and 5 is fizz buzz
 */ 


for (i=1;i<=100;i++)
{
var f ="";
	if (i%3 == 0 && i%5==0)	f = f+"fizzbuzz"+","+i;
	else if (i%3 == 0) f = f+"fizz"+","+i;
	else if (i%5 == 0) f=f+"buzz"+","+i;
console.log(f||i);
}