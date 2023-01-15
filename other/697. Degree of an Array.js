/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],[1,i,i]);

        }
        else{
            [time,first,last]=map.get(nums[i]);
            time=time+1;
            last=i;
            map.set(nums[i], [time,first,last]);
            



        }
    }
    let maxfre=-1;
    let result=-1;
    for(let [key,value]of map){
        if(value[0]>maxfre){
            maxfre=value[0];
            result=value[2]-value[1]+1

        }
        if(value[0]==maxfre){
            
            result=Math.min(result,value[2]-value[1]+1)

        }
        // console.log(key+ " "+value)
    }
    //console.log(maxfre)
    return result;
};