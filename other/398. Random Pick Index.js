/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums=nums
    
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    let a=this.nums
    let count=0;
    let resultpos=-1;
    for(let i=0;i<a.length;i++){
        if(a[i]==target){
            count++;
            let ran=Math.floor(Math.random()*count)
            if(ran==0){
                resultpos=i
            }


        }
    }
    return resultpos
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */