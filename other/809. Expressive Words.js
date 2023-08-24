/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
    let count = 0;
    for (let w1 of words) {
      let temps = s;
      let tempsl = 0;
      let i = 0;
  
      let test = true;
     
      while( i < w1.length) {
      let countw = 1;
      let counts = 1;
        while (i + 1 < w1.length && w1[i] == w1[i + 1]) {
          i++;
          countw++;
       
        }
        while (tempsl + 1 < temps.length && temps[tempsl] == temps[tempsl + 1]) {
          counts++;
          tempsl++;
        }
        console.log(countw,w1[i],counts,temps[tempsl])
    
  if(countw <= counts&&w1[i] == temps[tempsl]&&counts>=3){
  
  }
  else if(counts==countw&&w1[i] == temps[tempsl]){
  
  }
      else  {
          test = false;
      
        }
         i++;
         tempsl++;
  
  
  
  
      }
      if (test == true&&tempsl==s.length&&i==w1.length) {
        count++;
      }
      test = true;
    }
    return count;
  };
  