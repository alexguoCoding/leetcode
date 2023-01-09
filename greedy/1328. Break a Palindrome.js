/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    if(palindrome.length==1){
        return ""

    }

    
    let ss=palindrome.split("");
    for(let i=0;i<ss.length;i++){
        let temp=[...ss];
        temp[i]='a';
        let newarray=temp.slice();

        
        let rever=newarray.reverse().join("");

        let tempstr=temp.join("")


        if(rever!=tempstr){
            return tempstr;

        }
        else{
            continue;

        }

    }
    for(let i=ss.length-1;i>=0;i--){
        let temp=[...ss];
        temp[i]='b';
        let newarray=temp.slice();

        
        let rever=newarray.reverse().join("");

        let tempstr=temp.join("")


        if(rever!=tempstr){
            return tempstr;

        }
        else{
            continue;

        }

    }

    return "";
 
};