/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums=nums
    this.origin=[...nums]

    
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
     this.nums=[...this.origin]
     return this.nums
    
    
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let temp=[]
    let l=this.origin.length
    let randoml=this.nums.length
    for(let i=0;i<l;i++){
        let randomIndex=Math.floor(Math.random()*randoml)
        let randomNum=this.nums[randomIndex]
        temp.push(randomNum)
        let swapValue=randomNum
        this.nums[randomIndex]= this.nums[this.nums.length-1]
        this.nums[this.nums.length-1]=swapValue
         this.nums.pop()
         randoml=this.nums.length
        

    }
    this.nums=[...this.origin]
    return temp
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */