/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function (board) {
  let x = 0;
  let o = 0;
  console.log(board[2][1])
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == "X") {
        x++;
      } else if (board[i][j] == "O") {
        o++;
      }
    }
  }
  let Xwin = false;
  let Owin = false;
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] == board[i][1] &&
      board[i][1] == board[i][2] &&
      board[i][1] == "X"
    ) {
      // console.log(board[i][0])
   
      Xwin = true;
    }
    if (
      board[i][0] == board[i][1] &&
      board[i][1] == board[i][2] &&
      board[i][1] == "O"
    ) {
    
      Owin = true;
    }
  }
  for (let j = 0; j < 3; j++) {
    if (
      board[0][j] == board[1][j] &&
      board[1][j] == board[2][j] &&
      board[1][j] == "X"
    ) {
     
      Xwin = true;
    }
    if (
      board[0][j] == board[1][j] &&
      board[1][j] == board[2][j] &&
      board[1][j] == "O"
    ) {
      
      Owin = true;
    }
  }

  if (
    board[0][0] == board[1][1] &&
    board[1][1] == board[2][2] &&
    board[1][1] == "X"
  ) {
  
    Xwin = true;
  }
  if (
    board[0][0] == board[1][1] &&
    board[1][1] == board[2][2] &&
    board[1][1] == "O"
  ) {
   
    Owin = true;
  }

  if (
    board[0][2] == board[1][1] &&
    board[1][1] == board[2][0] &&
    board[1][1] == "X"
  ) {
    
    Xwin = true;
  }

  if (
    board[0][2] == board[1][1] &&
    board[1][1] == board[2][0] &&
    board[1][1] == "O"
  ) {
   
    Owin = true;
  }
  console.log("a");

if(Xwin){
    if(Owin){
        return false
    }
    if(x == o+1){
        return true

    }
    else{
      return false
    }
}
if(Owin){
    if(Xwin){
        return false
    }
    if(x == o){
        return true
    }
    else{
      return false
    }
}

  if (x == o || x == o + 1) {
    return true;
  }

  return false;
};
