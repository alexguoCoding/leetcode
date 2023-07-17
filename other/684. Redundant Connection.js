/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  let uf = new UnionFind(edges.length);
  for(let i=0;i<edges.length;i++){
      if(uf.check(edges[i][0],edges[i][1])){
          uf.union(edges[i][0],edges[i][1])
      }
      else{
        return edges[i]
      }

  }
};
class UnionFind {
  constructor(n) {
    this.parent = new Array(n + 1).fill(0);
    for (let i = 0; i < this.parent.length; i++) {
      this.parent[i] = i;
    }
  }
  find(a) {
    if (this.parent[a] != a) {
      this.parent[a] = this.find(this.parent[a]);
    }
    return this.parent[a];
  }
  union(a, b) {
    let A = this.find(a);
    
    let B = this.find(b);
    console.log(A,B)
    if (A == B) {
      
      return;
    }
      this.parent[A]=B
     // console.log(this.parent)

  }
  check(a,b){
    let A = this.find(a);
    let B = this.find(b);
    if (A == B) {
      
      return false;
    }
    return true

  }
}
