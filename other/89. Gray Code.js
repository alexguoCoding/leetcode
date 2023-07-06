/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let arr = new Array(n).fill(0);
  let set = new Set();
  let result = [];
  let getn = function (arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 1) {
        num += Math.pow(2, arr.length - i - 1);
      }
    }

    return num;
  };
  set.add(0)
  result.push(0)

  console.log(getn([1, 1, 0]));

  let dfs = function (pos) {
    let tempsave = arr[pos];
    if (arr[pos] == 0) {
      arr[pos] = 1;
    } else {
      arr[pos] = 0;
    }
    let n = getn(arr);
    if (set.has(n)) {
      arr[pos] = tempsave;
      return;
    }
    set.add(n);
    result.push(n);

    for (let i = 0; i < arr.length; i++) {
        dfs(i);
    }
    // arr[pos] = tempsave;
  };
  dfs(0)
  return result;
};