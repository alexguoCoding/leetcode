/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let rowL=matrix.length;
    let colL=matrix[0].length;
    let newM=new Array(rowL).fill(-1).map(()=>new Array(colL).fill(-1))
    for(let i=0;i<rowL;i++){
         for(let j=i;j<colL;j++){


            [ matrix[i][j], matrix[j][i]]=[matrix[j][i],matrix[i][j]]

         }
    }
    for(let i=0;i<matrix.length;i++){
        matrix[i]=matrix[i].reverse();
    }
    // console.log(newM)

    
};