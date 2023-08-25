/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    let l=arr.length
    let leftMost=new Array(l).fill(1)
    let cur=1
    for(let i=l-1;i>=1;i--){
        if(arr[i]<arr[i-1]){
            cur++
            leftMost[i-1]=cur
        }
        else{
            cur=1
        }
    }
     console.log(leftMost)
    let RightMost=new Array(l).fill(1)
     cur=1
    for(let i=0;i<l-1;i++){
        if(arr[i]<arr[i+1]){
            cur++
            RightMost[i+1]=cur
        }
        else{
            cur=1
        }
    }
    let max=-1
    for(let i=0;i<l;i++){
        if(RightMost[i]==1||leftMost[i]==1){
max=Math.max(0,max)
        }
        else{
max=Math.max(RightMost[i]+leftMost[i]-1,max)
        }

    }
  //  console.log(RightMost)
    return max

    
};