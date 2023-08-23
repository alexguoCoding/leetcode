/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    let l = board.length;
    let RX = -1;
    let RY = -1;
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < l; j++) {
        if (board[i][j] == "R") {
          RY = i;
          RX = j;
        }
      }
    }
    console.log(RY);
    let count = 0;
    for (let i = RY; i < l; i++) {
      if (board[i][RX] == "B") {
        break;
      }
      if (board[i][RX] == "p") {
        count++;
  
        break;
      }
    }
    for (let i = RY; i >= 0; i--) {
      if (board[i][RX] == "B") {
        console.log(i);
        break;
      }
      if (board[i][RX] == "p") {
        count++;
  
        break;
      }
    }
    for (let j = RX; j < l; j++) {
      if (board[RY][j] == "B") {
        break;
      }
      if (board[RY][j] == "p") {
        count++;
  
        break;
      }
    }
    for (let j = RY; j >= 0; j--) {
      if (board[RY][j] == "B") {
      
        break;
      }
      if (board[RY][j] == "p") {
        count++;
  
        break;
      }
    }
    return count;
  };
  