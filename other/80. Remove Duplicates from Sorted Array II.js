/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let origin=nums[0]
    let count=1;
    let i=1;
    while(i<nums.length){
        if(origin==nums[i]){
            count++;
            if(count>=3){
                nums[i]='a';
            }
        }
        else{
            origin=nums[i]
            count=1;
        }
        i++;



    }
    console.log(nums)

    for(let i=0;i<nums.length;i++){
        if(nums[i]=='a'){
           
             for(let j=i+1;j<nums.length;j++){
                 if(nums[j]!='a'){
                    nums[i] =nums[j]
                    nums[j]='a';
                    break;

                 }

             }
        }

    }

    console.log(nums)
    for(let i=nums.length-1;i>=0;i--){
        if(nums[i]=='a'){
           nums.pop()

        }

    }
};