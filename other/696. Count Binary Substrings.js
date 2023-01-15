/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    s=s.split("")
    let count=0;
    for(let i=0;i<s.length-1;i++){

        if(s[i]!=s[i+1]){
            let left=i;
            let right=i+1
            count++;
            while(left>0&&s[left]==s[left-1]&&right<s.length-1&&s[right]==s[right+1]){
                count++;
                left=left-1;
                right=right+1;


            }

        }
    }
    return count;
    
};