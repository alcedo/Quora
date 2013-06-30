#!/usr/bin/env node
//Interview Q: Implement a <basic data structure> using <some language> on <paper|whiteboard|notepad> 
//My take: use any scripting language hash as a quick hack :) ie:

function mySet() {
	this.set = {};
}

mySet.prototype.add = function (item) { 
	// alt: if(!this.isElementExist(item)) eval('this.set.' + item + '= "_EMPTY_STRING_" ');
	if(!this.isElementExist(item)) this.set[item] = 'empty';
};

mySet.prototype.remove = function (item) { 
	delete this.set[item];
};

mySet.prototype.isElementExist = function (item) { 
	if(typeof this.set === 'undefined') return false;
	return (item in this.set);
};

mySet.prototype.size = function () { 
	var size = 0;
	for(var item in this.set) size++;
	return size;
};

mySet.prototype.print = function () {
	console.log(this.set);
}

//Test

var set = new mySet(); 
set.add('apple');
set.add('orange');
set.add('pear');
set.add('pear');

set.print();

set.remove('apple');
set.print();
console.log(set.size());

