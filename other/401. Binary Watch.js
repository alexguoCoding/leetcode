/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  let arr = new Array(11)
  for (let i = 0; i < arr.length; i++) {
  arr[i] = [];
}
 // console.log(arr);
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j <= 59; j++) {
      let hours = i;
      let count = 0;
      while (hours != 0) {
        if (hours & 1 == 1) {
          count++;
          
        }
        hours = hours >> 1;
      }
      let min = j;
      while (min != 0) {
        if (min & 1 == 1) {
          count++;
          
        }
        min = min >> 1;
      }
      let str
      if(j<10){
        str=""+i+":"+"0"+j
      }
      else[
        str=""+i+":"+j
      ]
 
    
      arr[count].push(str)
      //console.log(arr)
    }
  }
  return arr[turnedOn]
};