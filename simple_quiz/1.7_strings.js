// Given a MxN matrix, if an element in it is 0, set its row and column to be 0 as well 
// Thoughts: hence we can have a dupilicated matrix that records all the '0' entries.
// there after copy the '0's over (double MxN space)
//
// Either that or simply record the rows and columns to be set to 0 (less space!) worst case of M+N space
// requirement 


// @Param matrix is of type 2D array, MxN, [rows][column] format

function turnZero(matrix) {
    var rows = matrix.length;
    var cols = matrix[0].length;
    var clone; // stores all the marked 0 entries. allows for override 
    cloneArray();

    // iterate through matrix cell
    for (var i = 0; i < rows; i++)
        for (var j = 0; j < cols; j++) {
            // flag 0 entries ! 
            if (matrix[i][j] == 0) {
                setColsZero(i);
                setRowsZero(j);
            }
        }


    // Copy flagged entries over 
    for (var i = 0; i < rows; i++)
        for (var j = 0; j < cols; j++) {
            if (clone[i][j] == 0)
                matrix[i][j] = 0;
        }

    return matrix;


    // -----------------	
    // Helper functions 

    function setColsZero(row) {
        for (var i = 0; i < cols; i++) {
            clone[row][i] = 0;
        }
    }

    function setRowsZero(col) {
        for (var i = 0; i < rows; i++)
            clone[i][col] = 0;
    }

    function cloneArray() {
        clone = new Array(rows);
        for (var i = 0; i < rows; i++)
            clone[i] = new Array(cols);
    }
}


var assert = require("assert");
describe('Basic Test', function() {
    describe('Test Set1', function() {
        it('should work :p', function() {
            var test = [
                [1, 2, 4],
                [3, 0, 9],
                [0, 2, 4],
            ];

            var check = [
                [0, 0, 4],
                [0, 0, 0],
                [0, 0, 0],
            ];

            var results = turnZero(test);

            assert.deepEqual(check, results);
        })
    })
})
