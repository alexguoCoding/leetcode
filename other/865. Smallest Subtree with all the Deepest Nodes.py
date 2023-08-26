# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def subtreeWithAllDeepest(self, root: TreeNode) -> TreeNode:
        maxHeight = [-1]
        result = [None]
        self.dfs(root,0,maxHeight,result)
        return result[0]
    def dfs(self, root: TreeNode,h,maxHeight,result):
        
        if root is None:
            maxHeight[0]=max(maxHeight[0],h)
            return h
     
        a=-1
        b=-2
        a=self.dfs(root.left,h+1,maxHeight,result)
        b=self.dfs(root.right,h+1,maxHeight,result)
        if a==b and a==maxHeight[0]:
            result[0]=root
        return max(a,b)



        
        
        
        

   
       