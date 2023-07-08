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
    let str=""
    let dfs=function(node){
        if(node==null){
            return
        }
        str=str+node.val+","
        dfs(node.left)
        dfs(node.right)

    }
    dfs(root)
    //console.log(str)
    return str
    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let temp=data.split(',')
    temp.pop()
    let preorder=[]
    for(let i=0;i<temp.length;i++){
        preorder.push(parseInt(temp[i]))

    }
    let inorder=[...preorder]
    inorder=inorder.sort((a,b)=>{return a-b})
   // console.log(inorder)
    let preorderN=0

    //console.log(inorder)
    dfs=function(l,r){
        if(l>r){
            return null
        }
        let start=preorder[preorderN]
        preorderN++;

        let mid=getpos(start)

        let node=new TreeNode(inorder[mid])
     //  console.log(inorder[start])
         node.left=dfs(l,mid-1)
         node.right=dfs(mid+1,r)
         return node

    }
    getpos=function(n){
        for(let i=0;i<inorder.length;i++){
            if(inorder[i]==n){
                return i

            }
        }
        return -1
       


    }
     return dfs(0,temp.length-1)

    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */