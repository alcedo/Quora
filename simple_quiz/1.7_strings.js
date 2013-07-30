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
    var clone = []; // stores all the marked 0 entries. allows for override 

    // iterate through matrix cell
    for (var i; i < rows; i++)
        for (var j; j < cols; j++) {
            // flag 0 entries ! 
            if (matrix[i][j] == 0) {

            }


        }
}

var assert = require("assert");
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-2, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        })
    })
})
