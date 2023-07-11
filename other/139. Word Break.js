/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let set=new Set();
     let visited=new Set();
    for(let w of wordDict){
        set.add(w)
    }
    let result=false
    let dfs=function(start){
        if(start==s.length){
            result=true
            return

        }
        for(let i=start+1;i<=s.length;i++){
             let record=""+start+i
            if(!set.has(record)){
                set.add(record)

            }
            else{
                continue
            }
            if(set.has(s.substring(start,i))){

               // console.log(s.substring(start,i))
                dfs(i)
            }
            else{
                continue
            }

        }
        return
    }
    dfs(0)
   
    return result
}