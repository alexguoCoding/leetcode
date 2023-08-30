# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:

    def largestValues(self, root: Optional[TreeNode]) -> List[int]:
        map1={}

        result=[]
        self.dfs(root,0,map1)
        for key,value in map1.items():
            result.append(value)
        #print(map1)
        return result
    def dfs(self,root,h,map1):
        if root==None:
            return
        if h in map1:
            map1[h]=max(map1[h],root.val)
        else:
            map1[h]=root.val
        #print(map1)
        self.dfs(root.left,h+1,map1)
        self.dfs(root.right,h+1,map1)

        