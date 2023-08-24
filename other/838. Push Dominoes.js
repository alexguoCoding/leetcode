/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  let l = dominoes.length;
  let PL = new Array(l).fill(Number.POSITIVE_INFINITY);
  let savel = 0;
  for (let i = l - 1; i >= 0; i--) {
    if (dominoes[i] == "L") {
      PL[i] = 1;
      savel = 1;
    } else if (dominoes[i] == "R") {
      savel = 0;
    } else if (dominoes[i] == "." && savel > 0) {
      savel++;
      PL[i] = savel;
    }
  }
  //console.log(PL);
  

  let PR = new Array(l).fill(Number.POSITIVE_INFINITY);
  let saver = 0;
  for (let i = 0; i <l; i++) {
    if (dominoes[i] == "R") {
      PR[i] = 1;
      saver = 1;
    } else if (dominoes[i] == "L") {
      saver = 0;

    } else if (dominoes[i] == "." && saver > 0) {
      saver++;
      PR[i] = saver;
    } 
  }
  
  //console.log(PR);
  let result = new Array(l).fill(-1);
  for (let i = 0; i < l; i++) {
    if (PL[i] == PR[i]) {
      result[i] = ".";
    } else if (PL[i] > PR[i]) {
      result[i] = "R";
    } else if (PL[i] < PR[i]) {
      result[i] = "L";
    }
  }
//console.log(result)

return result.join("")
 // return result;
};
