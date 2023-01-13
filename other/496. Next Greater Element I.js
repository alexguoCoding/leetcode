/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let decreaStack=[];
    let result=new Array(nums1.length).fill(-1);
    let map=new Map();
    for(let i =0;i< nums2.length;i++){
        let n=-1;
       
        while(decreaStack.length>0&&nums2[decreaStack[decreaStack.length-1]]<nums2[i]){
            n=nums2[decreaStack[decreaStack.length-1]]
            //result[decreaStack[decreaStack.length-1]]=nums2[i]
            decreaStack.pop()
            map.set(n,nums2[i])
             
            



        }

        decreaStack.push(i)


    }
    console.log(map)
    for(let i=0;i<nums1.length;i++){
        if(map.has(nums1[i])){
            result[i]=map.get(nums1[i])

        }
        else{
            result[i]=-1

        }
    }

    //console.log(result)
    return result;
};