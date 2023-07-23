/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (nums, queries) {
    let result = 0;
    for (let i of nums) {
      if (i % 2 == 0) {
        result += i;
      }
    }
    console.log(result)
    let resultArray=[]
    let l=queries.length
    for (let i=0;i<l;i++) {
        let temp=nums[queries[i][1]]
       nums[queries[i][1]]=nums[queries[i][1]]+queries[i][0]
       if(temp%2==0){
           result-=temp
       }
       if(nums[queries[i][1]]%2==0){
           result+=nums[queries[i][1]]
  
       }
       resultArray.push(result)
      
  
  
    }
    return resultArray
  };
  