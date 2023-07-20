/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let l = people.length;
  let set = new Set();
  let sorted =new Array(l).fill(0).map(()=>new Array(3).fill(0))

  //console.log(sorted)
  for(let i=0;i<l;i++){
      sorted[i][0]=people[i][0]
       sorted[i][1]=people[i][1]
       
  }
   sorted = sorted.sort((a, b) => {
    if (a[1] != b[1]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
 // console.log(sorted)
  let decrease = function (taregt) {
    for (let i = 0; i < l; i++) {
        //console.log(sorted[i][0],taregt)
      if (sorted[i][0] <= taregt) {
          
        sorted[i][1] = sorted[i][1] - 1;
        sorted[i][2]+=1
      }
    }
    sorted = sorted.sort((a, b) => {
      if (a[1] != b[1]) {
        return a[1] - b[1];
      } else {
        return a[0] - b[0];
      }
    });
   // console.log(sorted)
  };
  let result = [];
  while (set.size != people.length) {
     
    for (let i = set.size; i < l; i++) {
      if (sorted[i][1] == 0) {
        if (set.has(i)) {
          continue;
        }
        set.add(i);
        result.push(sorted[i]);
        decrease(sorted[i][0]);
        break;
      }
    }
     
  }
  //console.log(result)
  let final=[]
  for(let i=0;i<l;i++){
      final.push([result[i][0],result[i][1]+result[i][2]])

       
  }
return final

};
