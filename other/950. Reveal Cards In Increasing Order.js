/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck=deck.sort((a,b)=>a-b)
    let result=[];
     console.log(deck)
    result.unshift (deck.pop())
    while(deck.length!=0){
        let temp=result.pop()
        result.unshift(temp)
        result.unshift(deck.pop())
    }

    return result;
    console.log(deck)
};