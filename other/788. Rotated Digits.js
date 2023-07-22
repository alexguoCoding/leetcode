/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    let count=0
    for(let i=1;i<=n;i++){
        let temparr=i.toString()
         let tempcount=0
       
        for(let i=0;i<temparr.length;i++){

            if (temparr[i]=='3'||temparr[i]=='4'||temparr[i]=='7'){
                 tempcount=0
                break;
            }
            else if(temparr[i]=='2'||temparr[i]=='5'||temparr[i]=='6'||temparr[i]=='9'){
                tempcount=1
            
            }
        }
        count+=tempcount

    }
    return count
  
    
};