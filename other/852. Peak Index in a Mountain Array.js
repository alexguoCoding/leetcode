/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let r=arr.length-1
    let l=0
     let mid


    while(l+1!=r){
        mid=Math.floor((r+l)/2)
        if(arr[mid]>arr[mid+1]){

            r=mid
         
        }
        else{
        l=mid

        }

    }
    return r

};