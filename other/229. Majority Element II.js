/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let a = [];
  let b = [];
  for (n of nums) {
    if ((a.length == 0||a[0]==n)&&b[0] != n) {
      a.push(n);
    } else if (b.length == 0) {
      b.push(n);
    } else if (a[0] == n) {
      a.push(n);
    } else if (b[0] == n) {
      b.push(n);
    } else {
      a.pop();
      b.pop();
    }
//       console.log(a);
//   console.log(b);
//   console.log();
  }


  let result = [];

  let c = [];


  if(a.length>0){
        for (n of nums) {
            if(n==a[0]){
              c.push(n)  
            }
         
   
    }

  }

  let d = [];

  if(b.length>0){
        for (n of nums) {
            if(n==b[0]){
              d.push(n)  
            }
         
   
    }

  }


  if (c.length >Math.floor(nums.length/3)) {
    result.push(c[0]) ;
   // console.log(a)
  }
  if (d.length >Math.floor(nums.length/3)) {
        result.push(d[0]) 
  
  }
  return result;
    
};