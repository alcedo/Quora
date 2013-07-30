#!/usr/bin/env node

//Implement an algorithm to determine if a string has all unique characters
//Also: what if you cannot use any data structures ? 

//Naive version => o(n^2) run time. iterate through the string checking for duplicates
function isUnique(s) {
	var e = '';

	for(var i = 0; i<s.length; i++) {
		e = s[i]; //get an element from array for testing 

		for (var j = i+1; j<s.length; j++) { // Sweep through array to check if element is repeated
			if( e == s[j] ) return false;	
		}
	}

	return true;
}



// Test data

var s1 = 'abcdeff';
var s2 = 'abcdef';
var s3 = '11abc';

console.log( isUnique(s1) ); //false 
console.log( isUnique(s2) ); //true
console.log( isUnique(s3) ); //false



