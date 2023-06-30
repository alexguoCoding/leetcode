/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
   // console.log(nums.length)
    // while(nums[0]==0){
    //     nums.shift()
    // }
    for (let i=0;i<nums.length;i++){
        if(nums[i]<0){
              nums[i]='a'

        }

      
    }
    // console.log(nums)
    for (let i=0;i<nums.length;i++){
        if( nums[i]!='a'){
            if(   nums[Math.abs(nums[i])-1]=='a'){
                 nums[Math.abs(nums[i])-1]=-Math.abs(nums[i])
            }
            else if(   nums[Math.abs(nums[i])-1]==0){
                 nums[Math.abs(nums[i])-1]=-Math.abs(nums[i])

            }
            else if(  nums[i]-1>=0&&nums[i]-1<nums.length){
                nums[nums[i]-1]=- Math.abs(nums[Math.abs(nums[i])-1])
     

            }
  
            else if ( nums[i]<0&& Math.abs(nums[Math.abs(nums[i])-1])>=1&&Math.abs(nums[Math.abs(nums[i])-1])<=nums.length){

                  nums[Math.abs(nums[i])-1]= -Math.abs(nums[Math.abs(nums[i])-1])
            }
            // else if ( nums[i]==0){

            //       nums[i]= -1
            // }

           
        }
        //console.log(nums)
    }

    for (let i=0;i<nums.length;i++){
        if( nums[i]=='a'){
           return i+1
        }
        else if(nums[i]>=0){
            return i+1;

        }


    }
   return nums.length+1
   

    console.log(nums)

    
};