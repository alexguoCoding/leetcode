/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result=[];
    let tempNode=[];
    tempNode.push(root)
    if(root==null){
        return []

    }
    while(tempNode.length!=0){
        let l=tempNode.length;
        let tempresult=[];
        for(let i=0;i<l;i++){
            let  Node=tempNode.shift()
            
            tempresult.push(Node.val)
           
            if(Node.children.length!=0){
                for(let j=0;j<Node.children.length;j++){
                  tempNode.push(Node.children[j])

                }
            }

        }
        result.push(tempresult)

    }

    return result
    
};