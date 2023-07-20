/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  let set = new Set();
  let time = 0;
  dfs = function (n) {
    // if(set.has(n)){
    //   return 
    // }
    // set.add(n)
    if (n == 1) {
      return 0;
    }
    if(n == 0||n==2){
         return 1;

    }

    if (n % 2 == 0) {
      n = n / 2;
      time=dfs(n)+1
    } else {
      time = Math.min(dfs(n + 1), dfs(n - 1))+1;
    }
    return time
  };
  return dfs(n);
};
