/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hashFirst=new Map();
    let hashfre=new Map();
    for(let i =0;i<s.length;i++){
        if(!hashFirst.has(s[i])){
            hashFirst.set(s[i],i);
        }
        if(!hashfre.has(s[i])){
            hashfre.set(s[i],1)

        }
        else{
             hashfre.set(s[i] , hashfre.get(s[i])+1)
        }
        

    }
    let result=Number.MAX_VALUE;
    for([key,value] of hashfre){
        if(value==1){
            result=Math.min(hashFirst.get(key),result)


        }
    }
    return result==Number.MAX_VALUE?-1:result;
};