/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    let endpoint=s.length-1;
    let i=0;
    let left=0;
    let sendarray=[];
    let lastspace;
    let finaldelete=0;
    s.unshift(" ")
        const send=function(first,last){
            s.push(" ")
            for(let i=first;i<last;i++){
                s.push(s[i]);

            }

        }
        for(let i=s.length-1;i>=0;i--){
            if(s[i]==" "){
                lastspace=i;
                finaldelete=lastspace;
                break;

            }
        }

        for(let j=lastspace-1;j>=0;j--){
            if(s[j]==" "){
                send(j+1,lastspace);
                lastspace=j;



            }
        }
        for(let j=0;j<finaldelete+1;j++){
            s.shift();

        }




};