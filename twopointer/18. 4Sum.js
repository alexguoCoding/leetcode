/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    nums=nums.sort((a,b)=>{
        return a-b;
    });
console.log(nums);
    let result=[];
    for(let i=0;i<nums.length-3;i++){
        if(i>0&&nums[i]==nums[i-1]){
            continue;

        }    
        for(let j=i+1;j<nums.length-2;j++){
            if(j>i+1&&nums[j]==nums[j-1]){
            continue;

            }   

            let twosum=nums[i]+nums[j];
            let left=j+1;
            let right=nums.length-1;
            let t=target-twosum;
            while(left<right){
                if(t==nums[left]+nums[right]){
                    let tempresult=[];

                    result.push([nums[i],nums[j],nums[left],nums[right]]);
                     while(left+1<right&&nums[left+1]==nums[left]){
                        left++;

                    }
                    while(left<right-1&&nums[right-1]==nums[right]){
                        right--;

                    }
                    left++;
                    right--;

                    
                 
                }

                else if(t>nums[left]+nums[right]){
                    left++;

                }
                else if(t<nums[left]+nums[right]){
                    right--;

                }


       



                
            }




        

        }
    }

    
    return result;
};