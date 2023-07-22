/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  let l = answers.length;
  let map = new Map();
  for (let i = 0; i < l; i++) {
    map.set(answers[i], map.get(answers[i]) + 1 || 1);
  }
  console.log(map);
  let result = 0;
  for (let i = 1; i < 1000; i++) {
    let temp = map.get(i);
    if (temp != null) {

      if (temp <= i+1) {
        result = result + i+1;
        
      } else {
        result = result+i+1;
        temp=temp-i-1
        while(temp > i+1){
           result = result+i+1;
            temp=temp-i-1

        }
         result = result+i+1;
      }
      map.delete(i)
    }
  }
    let temp = map.get(0);
     if (temp != null) {
       result+=temp
     }
  return result;
};
