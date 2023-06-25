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
var rightSideView = function(root) {
    
    let bfslevel=[];
    if(root==null){
        return [];
    }

     
     let temp=[];
     temp.push(root);
     while(temp.length!=0){
         let N_level=temp.length;
         let count=0;
         lettemplevel=[];
         while(count<N_level){
             console.log(N_level)
            let first=temp.shift();
           // console.log(first.val);
            lettemplevel.push(first.val)
                if(first.left!=null){
                    temp.push(first.left)
                }
                if(first.right!=null){
                    temp.push(first.right)
                }
                //console.log(first.val)

   

            count++;

         }
         bfslevel.push(lettemplevel)


         
     }
     let result=[];
     for(let i=0;i<bfslevel.length;i++){
         result.push(bfslevel[i].pop())
     }
     //console.log(bfslevel);
     return result;
     


};