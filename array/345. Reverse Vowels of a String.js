/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    let set =new Set();
    set.add('a');
    set.add('e');
    set.add('i');
    set.add('o');
    set.add('u');
    set.add('A');
    set.add('E');
    set.add('I');
    set.add('O');
    set.add('U');
    let saved=[];
    let pos=[];
    s=s.split("");
    for(let i=s.length-1;i>=0;i--){
        
        if(set.has(s[i])){
            saved.push(s[i]);
            pos.push(i);
        }


    }
    console.log(pos);
    while(pos.length!=0){
        s[pos.pop()]=saved.shift();
    }

    s=s.join("");
    
    return s;
    
};