
var Node=function(){
    this.end=false
    this.array=new Array(26).fill(null)
}
var Trie = function() {
    this.parent=new Node();
    
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let children=this.parent;
    for(let i =0;i<word.length;i++){
        let pos=word[i].charCodeAt()-'a'.charCodeAt()
        if(children.array[pos]==null){
            children.array[pos]=new Node();
        }
        // if(i==word.length-1){
        //     pos.end=true;

        // }
        children=children.array[pos]
      


    }
      children.end=true;
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let children=this.parent;
    for(let i =0;i<word.length;i++){
        let pos=word[i].charCodeAt()-'a'.charCodeAt()
        if(children.array[pos]==null){
          return false
        }
        // if(i==word.length-1){
        //     pos.end=true;

        // }

        children=children.array[pos]
       


    }

    return children.end;
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let children=this.parent;

    for(let i =0;i<prefix.length;i++){
       
        let pos=prefix[i].charCodeAt()-'a'.charCodeAt()
        //  console.log('a'.charAt())
        if(children.array[pos]==null){
          return false
        }

        children=children.array[pos]
       


    }

    return true;
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */