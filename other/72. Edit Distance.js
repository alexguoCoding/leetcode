/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let l1 = word1.length;
  let l2 = word2.length;
  let mem = new Array(l1+1).fill(0).map(() => new Array(l2+1).fill(0));

  const dfs = function (m, n) {
   // console.log(m)
    if (m == 0) {
      return n ;
    }
    if (n ==0) {
      return m;
    }
    if (mem[m][n] == 0) {
     
      if (word1[m-1] == word2[n-1]) {
        //  console.log(word1[m])
        mem[m ][n]= dfs(m-1 , n-1);
      }
      else{
            mem[m ][n]= Math.min(dfs(m - 1, n), dfs(m - 1, n - 1), dfs(m, n - 1)) + 1;

      }

     
    }
    return mem[m ][n] 
  };

  return dfs(l1 , l2 )
};