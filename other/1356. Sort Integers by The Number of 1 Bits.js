/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    let count1=function(n){
        let count=0;
        while(n>0){
            //console.log(n)
            if(n&1==1){
                count++;
            }
            n>>=1;


        }
        return count;
    }
    arr.sort((a,b)=>{
        if( count1(a)==count1(b)){
            return a-b
        }
        else{
             return count1(a)-count1(b)

        }
 

    })
    return arr;
};