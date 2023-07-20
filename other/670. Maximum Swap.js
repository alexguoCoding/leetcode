/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let lowestPos = 0;
  arr = num.toString().split("");
  let minnum = arr[0];
  let minpos = -1;
  if (arr.length == 1) {
    return num;
  }
  swap = function (a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };
  for (let i = 0; i < arr.length - 1; i++) {
    let posmax = -1;
    let tempmax = -1;
    for (let j = i + 1; j < arr.length; j++) {
      

      if (arr[i] < arr[j] && tempmax <= arr[j]) {
        posmax = j;
        tempmax = arr[j];
      }
    }
    if (posmax != -1) {
      swap(i, posmax);

      return arr.join("");
    }
  }
  console.log(minpos);
  console.log(arr[minpos]);
  if (minpos == -1) {
    return num;
  }
};
