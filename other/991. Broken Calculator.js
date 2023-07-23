/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function (startValue, target) {

    let count=0
    while(target!=startValue){
      count++
      if(target%2==0&&target>startValue){
        target=target/2
      }
      else{
        target=target+1
      }
    }
    
  
  
    return count;
  };
s  