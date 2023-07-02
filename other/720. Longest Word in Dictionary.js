/**
 * @param {string[]} words
 * @return {string}
 */

var longestWord = function(words) {
    let sortAtrray=words.sort((a,b)=>{
        if(a.length!=b.length){
            return a.length-b.length//s-b
        }
        else{
             return b.localeCompare(a)//b-s c
        }
    })
    //console.log(sortAtrray)
    let set=new Set()
    let maxlength=0
    set.add("")
    let result=""
    for(let s of words){
        if(set.has(s.slice(0,s.length-1))){
            set.add(s)
            if(maxlength<s.length){
                result=s

            }


        }

    }
    return result

    
};