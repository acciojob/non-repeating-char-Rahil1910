function firstNonRepeatedChar(str) {
 // Write your code here
	let rep = false;  
	for(let i=0;i<str.length;i=i+2){
		if(str[i]!==str[i+1]){
			rep = true;
			return str[i]; 
		}
	}
	if(rep==false){
		return "null";
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
