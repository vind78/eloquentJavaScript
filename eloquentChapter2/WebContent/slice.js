/**
 * 

function remove(array,index){
	console.log(array.slice(0,index));
	console.log(array.slice(index+1));
	//return array.slice(0,index).concat(array.slice(index+1));
	
}
remove(["a","b","c","d","e"],2);
//console.log(remove(["a","b","c","d","e"],2)); 

 function argumentCounter(){
	 
	 console.log(arguments.length);
	 console.log()
 }
 argumentCounter("a");
 */
 
 function addEntry(squirrel){
	 var entry = {events:[],squirrel:squirrel};
	 for (var i = 1;i<arguments.length;i++)
		 entry.events.push(arguments[i]);
	 //journal.push(entry);	 
 }
 addEntry(true,"work","touched tree","pizza","running","television");
 
 
 
 
 
 