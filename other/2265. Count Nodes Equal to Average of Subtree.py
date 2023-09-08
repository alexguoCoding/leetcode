# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfSubtree(self, root: Optional[TreeNode]) -> int:
        result=[0]
        self.dfs(root,result)
        return result[0]
    def dfs(self, root,result):
        if root==None:
            return [0,0]
        left=self.dfs(root.left,result)
        right=self.dfs(root.right,result)
        sum1= left[0]+ right[0]+root.val
        num= left[1]+ right[1]+1
        if floor(sum1/num)==root.val:
            result[0]+=1
        #print([sum1,num])
        return [sum1,num]
    
        