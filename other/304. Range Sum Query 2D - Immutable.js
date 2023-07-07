/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    let height=matrix.length
     let width=matrix[0].length

  this.presum=new Array(height+1).fill(0).map(()=>new Array(width+1).fill(0))
   
    for(let i=1;i<=height;i++){
        for(let j=1;j<=width;j++){
            this.presum[i][j]=this.presum[i][j-1]+this.presum[i-1][j]-this.presum[i-1][j-1]+matrix[i-1][j-1]


        }
    }
    console.log(this.presum)
   
    
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let ma=this.presum
    return ma[row2+1][col2+1]-ma[row1][col2+1]-ma[row2+1][col1]+ma[row1][col1]
    
    
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */