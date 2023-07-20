/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  let emailToIndex = new Map();
  let IndexToemail = new Map();
  let emailToName = new Map();
  // console.log(accounts[0].length)
  let index = 0;
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 1; j < accounts[i].length; j++) {
      if (!emailToIndex.has(accounts[i][j])) {
        IndexToemail.set(index, accounts[i][j]);
        emailToIndex.set(accounts[i][j], index++);
      }
      if (!emailToName.has(accounts[i][j])) {
        emailToName.set(accounts[i][j], accounts[i][0]);
      }
    }
  }
    // console.log(emailToIndex)

  uf = new unionFind(index);
  for (let i = 0; i < accounts.length; i++) {
    let precon = accounts[i][1];
    for (let j = 2; j < accounts[i].length; j++) {
      uf.connect(emailToIndex.get(precon), emailToIndex.get(accounts[i][j]));
      console.log(precon,accounts[i][j])
    }
  }
  let connected = uf.getparent();
  let result = new Array(index);
  console.log(connected);
  for (let i = 0; i < index; i++) {
    result[i] = [];
  }

  for (let i = 0; i < index; i++) {
    result[uf.findParent(connected[i])].push(IndexToemail.get(i));
  }
  console.log(result);
  let output = [];
  for (let i = 0; i < index; i++) {
    if (result[i].length != 0) {
      let temp = new Array();
  

      for (let j of result[i]) {
          console.log(j)
        temp.push(j);
      }
      temp=temp.sort()
    temp.unshift(emailToName.get(result[i][0]));
      output.push(temp)
    }
  }
  return output;

 
};
class unionFind {
  constructor(index) {
    this.parent = new Array(index).fill(0);
    for (let i = 0; i < index; i++) {
      this.parent[i] = i;
    }
  }
  findParent(a) {
    if (this.parent[a] != a) {
      this.parent[a] = this.findParent(this.parent[a]);
    }
    return this.parent[a];
  }
  connect(a, b) {
    // console.log(a, b);
    let A = this.findParent(a);
    let B = this.findParent(b);
    if (A != B) {
      this.parent[A] = B;
    }
    //this.findParent(a);
     //this.findParent(b);

    // console.log(this.parent);
  }
  getparent() {
    return this.parent;
  }
}
