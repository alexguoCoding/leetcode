/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let result=0;
    if(points.length==1){
        return 1;
    }
    for(let i=0;i<points.length;i++){
         for(let j=i+1;j<points.length;j++){
             let tempsum=0;
             for(let k=j+1;k<points.length;k++){
                if(((points[k][1]-points[i][1])*(points[k][0]-points[j][0]))== (points[k][1]-points[j][1])*(points[k][0]-points[i][0])){
                    tempsum++;

                }
            


             }
             result=Math.max(tempsum,result)

         }
    }
    result=result+2
    return result
    
};