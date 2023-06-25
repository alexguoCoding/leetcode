/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let bitarray=Array(32).fill(0);
    //console.log(bitarray)
    for(let i of nums){
        for(let j=0;j<32;j++){
            // if((i>>j)&1){
            //     bitarray[j]++
            // }

           bitarray[j]= bitarray[j]+((i>>j)&1)
   
            //console.log(i)
        }

    }
    let result=0;
    for(let j=0;j<32;j++){
         bitarray[j]=bitarray[j]%3
         result+=(bitarray[j]<<j)


    }
     console.log(result)
     return result
    
};