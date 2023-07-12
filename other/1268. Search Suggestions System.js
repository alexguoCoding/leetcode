/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    const Node = function () {
      this.array = new Array(26).fill(null);
      this.end = false;
      this.str = "";
    };
    let start = new Node();
    for (let i = 0; i < products.length; i++) {
      let tempstart = start;
      for (let c of products[i]) {
        let pos = c.charCodeAt() - "a".charCodeAt();
        if (tempstart.array[pos] == null) {
          tempstart.array[pos] = new Node();
        }
        tempstart = tempstart.array[pos];
      }
      tempstart.end = true;
      tempstart.str = products[i];
    }
    let result = [];
    dfs = function (tempstart, temparray) {
      if (tempstart.end == true&&temparray.length<3) {
        temparray.push(tempstart.str);
      }
      if (temparray.length == 3) {
        return;
      }
      //console.log(temparray)
  
      for (let i = 0; i < 26; i++) {
        if (tempstart.array[i] != null) {
          let saveNode = tempstart;
          tempstart = tempstart.array[i];
  
          dfs(tempstart, temparray);
          tempstart = saveNode;
        }
      }
      return;
    };
  
    for (let i = 1; i <= searchWord.length; i++) {
      let tempstr = searchWord.substring(0, i);
      let tempstart = start;
  
      let temparray = [];
      let target=tempstr.length
      let check=0
      for (let c of tempstr) {
        let pos = c.charCodeAt() - "a".charCodeAt();
        if (tempstart.array[pos] != null) {
          tempstart = tempstart.array[pos];
          check++;
        } else {
          break;
        }
      }
  
      if (check==target) {
        dfs(tempstart, temparray);
      }
  
      result.push(temparray);
    }
  
    return result;
  };
  