/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  let dp = JSON.parse(JSON.stringify(matrix));
  //console.log(dp)
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == "1") {
        result++;;
      }
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] == "1") {
        dp[i][j] =Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1;
        result +=dp[i][j]-1;
        //console.log(dp)
      }
    }
  }
  return result;
};