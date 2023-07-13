/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let l=-1
    let r=letters.length
    while(l+1!=r){
        let mid=Math.floor((r+l)/2)
        if(letters[mid].charCodeAt()<=target.charCodeAt()){
            l=mid

        }
        else{
            r=mid
        }
        // console.log([l,r])
    }
    if(l==-1||r==letters.length){
        return letters[0]
    }
    return letters[r]
    
};