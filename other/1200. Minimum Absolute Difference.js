/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr=arr.sort((a,b)=>{
        return a-b
    });
    console.log(arr)
    let =[];
    let diff=[];
    for(let i=0;i<arr.length-1;i++){
        diff.push(arr[i+1]-arr[i])
    }
    let mindiff=Math.min(...diff)
    let result=[];
    //  console.log(arr)
    //console.log(mindiff)
    for(let i=0;i<diff.length;i++){
        //console.log(i)
        if(diff[i]==mindiff){
            //console.log(i)
            result.push([arr[i],arr[i+1]])

        }
    }
    return result;

    
    
};