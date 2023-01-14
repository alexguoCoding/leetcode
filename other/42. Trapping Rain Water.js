/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftmax=new Array(height.length).fill(0);
    leftnum=height[0];
    for(let i=1;i<height.length;i++){
        leftmax[i]=Math.max( leftnum,height[i-1])
        leftnum=leftmax[i]
        

    }
    let rightmax=new Array(height.length).fill(0);
    rightnum=height[height.length-1];
    for(let i=height.length-2;i>=0;i--){
        rightmax[i]=Math.max( rightnum,height[i+1])
        rightnum=rightmax[i]
        

    }
 let sum=0;
    for(let i=1;i<height.length;i++){
        let add=Math.min( rightmax[i], leftmax[i])-height[i]
        if(add>0){
            sum+=add;
        }

        

    }
    return sum;
    
};