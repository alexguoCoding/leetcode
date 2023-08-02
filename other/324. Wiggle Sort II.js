/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    let sorted=nums.sort((a,b)=>a-b)
    let l=nums.length
    console.log(sorted)
    let result=new Array(l).fill(-1)
    let start=l-1
    let left=0
  

        for(let i=1;i<l;i+=2){
            result[i]=sorted[start--]
            //console.log(result)
        }
        for(let i=0;i<l;i+=2){
            result[i]=sorted[start--]
          //  console.log(result)
        }




    for(let i=0;i<l;i++){
        nums[i]=result[i]
    }
    
   
};