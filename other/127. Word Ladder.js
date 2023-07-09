/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let wordlistSet=new Set()
    for(let c of wordList){
        wordlistSet.add(c)
    }
    let Vistied=new Set()
    let savearr=[]
    savearr.push(beginWord.split(""))
    //console.log(savearr)
    let count=1;
    if(!wordlistSet.has(endWord)){
        return 0

    }
    while(savearr.length!=0){
        let times=savearr.length
        count++;

        for(let i=0;i<times;i++){
            
            let temparr=savearr.shift()
            // let savetemp=[...temparr]
           // console.log(temparr)
            for(let j=0;j<temparr.length;j++){
                 
                for(let k=0;k<26;k++){
                    let savetemp=[...temparr]
                    savetemp[j]=String.fromCharCode(k+'a'.charCodeAt())
                    let str=savetemp.toString().replaceAll(",","")
                    
                    //console.log(str)
                    if(wordlistSet.has(str)){
                        //console.log(str)
                        if(!Vistied.has(str)){
                            Vistied.add(str)
                            //console.log(str)
                            savearr.push(savetemp)

                        }
                        if(str==endWord&&wordlistSet.has(endWord)){
                            return count;
                        }
                    }


                }
            }
        }
    }
    return 0
};