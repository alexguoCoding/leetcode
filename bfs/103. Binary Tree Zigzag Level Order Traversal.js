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
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    let queue=[];
    if(root){
          queue=[root];
    }

    let level=0;
    let result=[];
    while(queue.length>0){
        let levelSize=queue.length;
        let temp=[];
        for(let i=0;i<levelSize;i++){
            let cur=queue.shift();
            if(cur.left){
                queue.push(cur.left);
                //console.log(cur.left.val);
            }
            if(cur.right){
                queue.push(cur.right);
            }
            temp.push(cur.val);
             
            
         }
        result.push(temp);

    }
    for(let i=0;i<result.length;i++){
        if(i%2==1){
            result[i]= result[i].reverse();
        }
    }
    return result;
    
    
};