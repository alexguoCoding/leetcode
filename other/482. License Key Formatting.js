/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let sum=[];
    for(let i=0;i<s.length;i++){
        if(s[i]!='-'){
            sum.push(s[i]);

        }
        
    
    }
    sum=sum.join("");
    console.log(sum.length);

    let result=[];
    let firstl=sum.length%k;
    let temp=sum.substring(0,firstl);
    if(firstl>0){
         result.push(temp);
    }


    let pos=firstl;
    while(pos<sum.length){
        result.push(sum.substring(pos,pos+k))
        pos+=k;

    }
    let final=""
   
        final+=result.join("-").toUpperCase()


   
    console.log(final)
    return final;


    
};