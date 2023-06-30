var WordDictionary = function () {
    this.parent = new node();
  };
  var node = function () {
    this.end = false;
    this.array = new Array(26).fill(null);
  };
  /**
   * @param {string} word
   * @return {void}
   */
  WordDictionary.prototype.addWord = function (word) {
    let children = this.parent;
  
    for (let c of word) {
      let pos = c.charCodeAt() - "a".charCodeAt();
      if (children.array[pos] == null) {
        children.array[pos] = new node();
      }
       
      children = children.array[pos];
      // console.log()
     
    }
  
     children.end = true;
    
  };
  
  /**
   * @param {string} word
   * @return {boolean}
   */
  WordDictionary.prototype.search = function (word) {
    return dfs(word, 0, this.parent);
  };
  let dfs = function (word, pos, node) {
    if(word.length==pos){
      //console.log('true')
      return node.end
    }
    let children = node;
    if (word[pos] == ".") {
      for (let i = 0; i < 26; i++) {
  
  
        if (children.array[i] != null&&dfs(word, pos + 1, children.array[i])) {
  
            return true
       
        }
      }
      return false;
    } else {
      let charpos = word[pos].charCodeAt() - "a".charCodeAt();
        // console.log( word[pos])
        // console.log(children.array[charpos].end)
  
  
        if (children.array[charpos] != null) {
  
          return dfs(word, pos + 1, children.array[charpos]);
        } else {
          return false;
        }
      }
    
  };
  
  /**
   * Your WordDictionary object will be instantiated and called as such:
   * var obj = new WordDictionary()
   * obj.addWord(word)
   * var param_2 = obj.search(word)
   */
  