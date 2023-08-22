/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    
    let a=[-1,-1]
        let dfs=function(node,depth,x){
            if(node==null){
                return 
            }
            
            if(node.left!=null&&node.left.val==x){
                a[0]=node.val;
                a[1]=depth;
    
    
            }
            if(node.right!=null&&node.right.val==x){
                 a[0]=node.val;
                a[1]=depth;
          
    
            }
           // console.log(a)
            dfs(node.left,depth+1,x)
            dfs(node.right,depth+1,x)
        }
        dfs(root,0,x)
    
        let [x1,x2]=[a[0],a[1]]
        a=[-1,-1]
        dfs(root,0,y)
        let [y1,y2]=[a[0],a[1]]
        console.log([x1,x2])
         console.log( [y1,y2])
        if(x1!=y1&&x2==y2){
            return true
    
        }
        return false
        
    
        
    };