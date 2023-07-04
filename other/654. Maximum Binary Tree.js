/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let length=nums.length
    let pre=null

    
    let dfs=function(l,r,node){
        if(l>r){
            return null

        }
        let mid=getMaxindex(l,r)

        node=new TreeNode(nums[mid])
        
       
        node.left=dfs(l,mid-1,node.left)
        node.right=dfs(mid+1,r,node.right)




        return node

    }

    let getMaxindex=function(l,r){
        let maxpos=-1
        let curmax=-1
        for(let i=l;i<=r;i++){
           if(curmax<nums[i]){
               curmax=nums[i]
               maxpos=i

           }
        }
        return maxpos


    }
    return dfs(0,length-1,pre);

    
};