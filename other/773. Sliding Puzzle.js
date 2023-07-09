/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  let move = new Array(6).fill([]);

  move[0] = [1, 3];
  move[1] = [0, 2, 4];
  move[2] = [1, 5];
  move[3] = [0, 4];
  move[4] = [1, 3, 5];
  move[5] = [2, 4];
  //console.log(move[4])
  let save = [];

  get0pos = function (arr) {
    for (let i = 0; i < 6; i++) {
      if (arr[i] == 0) {
        return i;
      }
    }
  };
  swap = function (i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
  };
  let visit = new Set();
  let end = new Set();
  let arr = new Array(6).fill(0);
  let posarr = 0;
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      arr[posarr] = board[i][j];
      posarr++;
    }
  }

  save.push(arr);
  let count = 0;
  end.add("1,2,3,4,5,0");
  if(end.has(arr.toString())){
      return 0

  }

  while (save.length != 0) {
    let times = save.length;
    count++;
    for (let i = 0; i < times; i++) {
      let tempboard = save.shift();
      // console.log(tempboard)
      let pos0 = get0pos(tempboard);
      //  console.log(pos0)
      
      // console.log(move[pos0])
      for (let i = 0; i < move[pos0].length; i++) {
        arr = [...tempboard];
        let temparr = swap(move[pos0][i], pos0, arr);
        //console.log(temparr);
        let tempstr = temparr.toString();
        //console.log(tempstr)
        if (!visit.has(tempstr)) {
          visit.add(tempstr);
          save.push(temparr);
        }
        if (end.has(tempstr)) {
          return count;
        }
      }
    }
  }
  return -1;
};
