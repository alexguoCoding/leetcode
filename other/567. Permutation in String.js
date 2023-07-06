/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let a1=new Array(26).fill(0)
     let a2=new Array(26).fill(0)
     for(let i=0;i<s1.length;i++){
         a1[s1[i].charCodeAt()-'a'.charCodeAt()]++
     }
      let l1=a1.toString()
     for(let r=0,l=0;r<s2.length;r++){
         a2[s2[r].charCodeAt()-'a'.charCodeAt()]++;

         while(r-l>s1.length-1){
            
            a2[s2[l].charCodeAt()-'a'.charCodeAt()]--;
             l++;

         }
         
        
         let l2=a2.toString()
         if(l1===l2){
             return true
         }
        
         

         
     }
      return false
    
};