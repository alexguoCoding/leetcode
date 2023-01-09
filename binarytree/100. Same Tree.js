/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 let result=true;
  let test;
var isSameTree = function(p, q) {
    //console.log(result);
    

    

    if(p==null&&q==null){
        return true;

        

    }
    else if(p==null&&q!=null){
         console.log("2");
        
        result=false;
        console.log(result);
        return false;
      

    }
    else if(p!=null&&q==null){
        console.log("3");
       
        result=false;
        console.log(result);
        return false;

    }
    else if(p!=null&&q!=null){
        console.log("4");
        
        if(p.val==q.val){
            return isSameTree(p.left,q.left)&&isSameTree(p.right,q.right);

            


        }
        else{
            
            return false;
        }
         
         console.log(result);
    

        

    }
    return result;
    
};