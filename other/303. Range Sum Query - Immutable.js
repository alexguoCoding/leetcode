/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.presum=new Array(nums.length).fill(0)
     this.presum[0]=0
    for(let i =0;i<nums.length;i++){
         this.presum[i+1]= this.presum[i]+nums[i]
    }
   // console.log( this.presum)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let a=this.presum

    return a[right+1]-a[left]
    
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */