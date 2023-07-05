/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    let result = [];
    let height = mat.length;
    let width = mat[0].length;
    let trverse = -1;
    let diaTra = function (y, x) {
      let temp = [];
     // console.log("a")
      while (x >= 0 && x < width && y >= 0 && y < height) {
         temp.push(mat[y][x]);
       //  console.log(mat[y][x])
         
        y++;
        x--;
        // console.log(temp)
  
  
      }
     
      if (trverse == -1) {
        temp = temp.reverse();
      }
      //  console.log(temp)
      for(let i of temp){
        result.push(i);
      }
  
     
    };
  
    for (let j = 0; j < width;j++) {
      diaTra(0, j, trverse)
      trverse = trverse * -1;
    }
    for (let i = 1;  i < height;i++) {
      diaTra(i, width-1, trverse)
      trverse = trverse * -1;
    }
    return result;
  };
  