/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let splitArray=[];
    let element=nums[0];

    let temparray=[];
    temparray.push(element)
    if(nums.length==0){
        return []
    }
    for(let i=1;i<nums.length;i++){

        if(nums[i]==element+1){
            temparray.push(nums[i]);
            element=nums[i];

        }
        else{
            splitArray.push(temparray);
            temparray=[];
            element=nums[i]
            temparray.push(element)
    
            
        }
      

    }
 
  splitArray.push(temparray)
    //console.log(splitArray)
    let result=[];
    for(let e of splitArray){
        //console.log(e)
        if(e.length==1){
            result.push(e[0].toString())  
        }
        else{
             result.push(e[0].toString()+"->"+e[e.length-1].toString())

        }
        

       

    }
    return result
    
};