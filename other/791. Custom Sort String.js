/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let orderMap=new Map()
    let freMap=new Map()
    let rank=0
    let result=""
    for(let i of order){
        orderMap.set(++rank,i)
    }
    for(let i of s){
        freMap.set(i,freMap.get(i)+1||1)
    }
    for(i=1;i<=26;i++){
        
        if(freMap.get(orderMap.get(i))!=null){
            let num=freMap.get(orderMap.get(i))
            for(let j=0;j<num;j++){
                result+=orderMap.get(i)
            }
            freMap.delete(orderMap.get(i))

        }

    }
    for(let i=0;i<26;i++){
        let chara=String.fromCharCode(i+'a'.charCodeAt())
        if(freMap.has(chara)){
            let num=freMap.get(chara)
            for(let j=0;j<num;j++){
                result+=chara
            }

            freMap.delete(chara)
            

        }
        
    }

    console.log(result)
    return result

};