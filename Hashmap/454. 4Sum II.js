/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let set1=new Map();

     let result=0;
     for(let i=0;i<nums1.length;i++){
         for(let j=0;j<nums2.length;j++){
             let sum1=nums1[i]+nums2[j]
             if(!set1.has(sum1)){
                 set1.set(sum1,1);
             }
             else{
                 set1.set(sum1,set1.get(sum1)+1);
             }
         }

     }
     for(let i=0;i<nums3.length;i++){
         for(let j=0;j<nums4.length;j++){
             let sum1=nums3[i]+nums4[j]
             if(set1.has(-sum1)){
                 result=set1.get(-sum1)+result;
             }
         }

     }
     return result;

    
};