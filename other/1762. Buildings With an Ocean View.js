/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    let result=new Array(heights.length).fill(-1);
    
    let decstack=[];
    for(let i=0;i<heights.length;i++){
        while(decstack.length>0&&heights[decstack[decstack.length-1]]<=heights[i]){
            result[decstack[decstack.length-1]]=1;
            decstack.pop();
        }
        decstack.push(i)
    }
    let final=[];
    for(let i=0;i<heights.length;i++){
        if(result[i]==-1){
final.push(i)
        }
    }
    return final;
};