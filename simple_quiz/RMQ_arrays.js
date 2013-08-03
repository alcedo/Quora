// Yet another JS implementation of the RMQ algorithm
// Range Minimum Query (RMQ) is used on arrays to find 
// the position of an element with the minimum value between 
// two specified indices. We will see later that the LCA problem 
// can be reduced to a restricted version of an RMQ problem, in which 
// consecutive array elements differ by exactly 1

function RMQ (data) {

	var arraySize = data.length; 
	// Stores RMQ positional value for indices i,j in a 2 dimensional table[arraySize][arraySize]
	var indices = squareArray (arraySize);

	preProcess();

	// visualise results 
	console.log(indices);

	return indices; 

	// For-each array element, figure out whether its more than, or less than 
	// other elements within the array. Start with first element, compare 
	// this element with the rest. For each comparison, stores the result
	// of the comparision in indices array (i,j)
	// 
	// Continue to do so with second element, compare it with the rest... so on
	// and so forth !
	function preProcess(){ // naive o(n^2) operation. ie: double pass 

		for (var i = 0; i < arraySize; i++) {
			indices[i][i] = i; //RMQ for indices (i, i) is always i 
		}

		for (i = 0; i < arraySize; i++)
      		for (j = i + 1; j < arraySize; j++) {
      			if ( data[ indices[i][j - 1] ] < data[j] )
      				indices[i][j] = indices[i][j-1]; //(i,j) = LHS element
      			else 
      				indices[i][j] = j; //(i,j) = RHS element
        	}
	}

	// Creates a N x N dimensional array
	function squareArray(size) {
		var myArray = new Array(size);
		for(var i=0; i<size; i++)
			myArray[i] = new Array(size);

		return myArray;
	}

}

// Sample Data set 
var dataSet = [2,4,3,1,6,7,8,9,1,7];
RMQ(dataSet);




