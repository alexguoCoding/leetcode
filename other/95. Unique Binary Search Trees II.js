/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  let index=[]
  for(let i=1;i<=n;i++){
    index.push(i)
  }
  console.log(index)
  let dfs=function(l,r){
    let result=[]

      if(l>r){
        result.push(null) 
        return result;
      }
    for(let i=l;i<=r;i++){
      let leftnode=[]
      let rightnode=[]
      leftnode=dfs(l,i-1)
      rightnode=dfs(i+1,r)
      for(let j of leftnode){
         for(let k of rightnode){
           let startnode=new TreeNode(index[i])
           startnode.left=j
           startnode.right=k
           result.push(startnode)
         }
      }




    }
    return result

  }
  return dfs(0,n-1)
    
};