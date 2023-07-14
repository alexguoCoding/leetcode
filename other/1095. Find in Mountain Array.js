/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    // console.log(mountainArr.length())
    // console.log(mountainArr.get(0))
    let left=0
    let right=mountainArr.length()-1
    let peek=-1
    while(left+1!=right){
        let mid=Math.floor((left+right)/2)
        if(mountainArr.get(mid)<mountainArr.get(mid+1)){
            left=mid
        }
        else{
             right=mid
        }

    }
    peek=right
     left=-1
     right=peek
    while(left+1!=right){
        let mid=Math.floor((left+right)/2)
        if(mountainArr.get(mid)<target){
            left=mid
        }
        else if(mountainArr.get(mid)>target){
             right=mid
        }
        else{
            return mid
        }

    }

     left=peek-1
     right=mountainArr.length()
    while(left+1!=right){
        let mid=Math.floor((left+right)/2)
        if(mountainArr.get(mid)<target){
            right=mid
        }
        else if(mountainArr.get(mid)>target){
             left=mid
        }
        else{
            return mid
        }

    }
    return -1


  


    
};