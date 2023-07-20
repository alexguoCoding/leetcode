/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let l=ratings.length
    let result=new Array(l).fill(-1)
    result[0]=1
    for(let i=1;i<result.length;i++){
        if(ratings[i]>ratings[i-1]){
            result[i]= result[i-1]+1

        }
        else{
            result[i]=1
        }


    }
    console.log(result)
    for(let i=l-2;i>=0;i--){
        if(ratings[i]>ratings[i+1]){
            result[i]= Math.max(result[i+1]+1,result[i])

        }



    }
    console.log(result)
    let sum=0
    for(let i=0;i<result.length;i++){
        sum+=result[i]
    }
    return sum
    
};