/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  let arr = s.split("");
  let l = arr.length;

  let temp = "";
  let result = [];
  let i = 0;

  let dfs = function (n) {
    if ((n == l)) {
      result.push(temp) ;
      return
    }
    if (!isNaN(arr[n])) {
      temp += arr[n];
      dfs(n + 1);
      temp=temp.slice(0, temp.length - 1);
    } else {
        temp += arr[n].toUpperCase();
        dfs(n + 1);
         temp=temp.slice(0, temp.length - 1);

        temp += arr[n].toLowerCase();
        dfs(n + 1);
         temp=temp.slice(0, temp.length - 1);
      
    }
    return
  };
  dfs(i);
  return result;
};
