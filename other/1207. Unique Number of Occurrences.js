/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map=new Map();
    for(let key of arr){
        if(!map.has(key)){
            map.set(key,1);
        }
        else{
            map.set(key,map.get(key)+1);
        }
    }
    let fremap=new Map();
    for(let [key,fre] of map){
        // console.log(fre)
        if(!fremap.has(fre)){
            fremap.set(fre,1);
           
        }
        else{
            return false;
        }
    }
    return true;

};