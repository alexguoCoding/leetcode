/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
     haystack=haystack.split("");
     needle=needle.split("");

     let start=0;
     let j=0;
     let i=0;
     while(start<haystack.length){
        i=start;
        
         while(haystack[i]==needle[j]&&j<needle.length){
            // console.log(i)

             j++;
             i++;
         }
             if(j==needle.length){     
                 break;
             }
     
             j=0;
             start++;
        
         
         
     }
     if(j!=needle.length){
         return -1;

     }

     return start;


};