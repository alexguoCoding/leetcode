/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let col=matrix[0].length;
    let row=matrix.length
    let result=new Array(col).fill(-1).map(()=>new Array(row).fill(-1))
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            result[j][i]=matrix[i][j]

        }


    }
    return result;
    
};