/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    arr.sort((a,b)=>{
        if(Math.abs(a-x)!=Math.abs(b-x)){
            return Math.abs(a-x)-Math.abs(b-x)

        }
        else {
            a-b;

        }
    })
    console.log(arr);
    let ans=arr.slice(0,k)
    ans.sort((a,b)=>(a-b))
    return ans;
};