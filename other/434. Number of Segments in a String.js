/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if(s==""){
        return 0

    }
    let l=s.length

    let count=0
    let i=0
    while(i<l){

    
        console.log(i)
        if(s[i]==" "){
           while(i<l&&s[i]==" "){
               i++
           }
        }
        else{
           while(i<l&&s[i]!=" "){
               i++
           }
           count++;


        }
        
    }

    return count
};