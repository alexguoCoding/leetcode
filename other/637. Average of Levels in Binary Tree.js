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
 * @return {number[]}
 */
var averageOfLevels = function(root) {

    let NodeArray=[];
    let result=[];
    NodeArray.push(root)

    var bfs=function(root){
        while(NodeArray.length!=0){
           l=NodeArray.length;
           let sum=0;

            for(let i=0;i<l;i++){
                
                let rempnode=NodeArray.shift()
                sum+=rempnode.val
                if(rempnode.left!=null){
                    NodeArray.push(rempnode.left)


                }
                if(rempnode.right!=null){
                    NodeArray.push(rempnode.right)

                }
                
   

        }
        result.push(sum/l)

        }
    }




    bfs(root)
    return result;


  



};