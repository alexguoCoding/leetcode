/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    let l=shifts.length;
    let changeA=new Array(l).fill(0)
 changeA[l-1]=shifts[l-1]%26
    for(let i=l-1;i-1>=0;i--){
       changeA[i-1]=changeA[i]+shifts[i-1]
             
        changeA[i-1]=changeA[i-1]%26

     



    }
    //console.log(changeA)
    let result=[]
    for(let i=0;i<l;i++){
        if(s[i].charCodeAt()+changeA[i]-'a'.charCodeAt()>=26){
            let temp=s[i].charCodeAt()+changeA[i]-'a'.charCodeAt()-26
            result.push(String.fromCharCode(temp+'a'.charCodeAt()))
        }  
        else{
            result.push(String.fromCharCode((s[i].charCodeAt()+changeA[i])))
        }
   
  



    }
    return result.join("")
    console.log(changeA)
    
};