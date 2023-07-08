/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let str="";
    let dfs=function(root){
        if(root==null){
              str=str+'*'+","
              return 
        }
        str=str+root.val+","
        dfs(root.left)
        dfs(root.right)
     

    }
   dfs(root)
   //console.log(str)
    return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let arr=data.split(",")

    //console.log(arr)


    let dfs=function(){
        if(arr.length==0){
            return null
        }
        let c=arr.shift()
        if(c=='*'){
            return null
        }
        let temp=new TreeNode(parseInt(c))

     
        temp.left=dfs()
        temp.right=dfs()
        return temp



    }
    return dfs(arr)
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */