/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    l=nums.length
    let leftsmall=0
     let leftbig=0

    for(let i=l-1;i>0;i--){
        if(nums[i]>nums[i-1]){
            leftsmall=i-1
            break;
        }
        if(i==1){
            return nums.reverse()

            
        }
    }
    //console.log(leftsmall)
    for(let i=l-1;i>0;i--){
        if(nums[leftsmall]<nums[i]){
            leftbig=i
            break
        }
    }
    
    
    let temp=nums[leftsmall]
     nums[leftsmall]=nums[leftbig]
     nums[leftbig]=temp
      left=leftsmall+1
      right=l-1
     while(left<right){
    let temp=nums[left]
     nums[left++]=nums[right]
     nums[right--]=temp

     }


    console.log(nums)
    
};