# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def addOneRow(self, root: Optional[TreeNode], val: int, depth: int) -> Optional[TreeNode]:
        if depth==1:
            save=root
            root=TreeNode(val=val, left=save)
        else:
            self.dfs(root,val,1,depth)
        return root

    def dfs(self, root, val, h,target):
        if root==None:
            return
        if h==target-1:

                saveleft=root.left
                root.left=TreeNode(val=val, left=saveleft)

                saveright=root.right
                root.right=TreeNode(val=val, right=saveright)
        else:
            self.dfs(root.left,val,h+1,target)
            self.dfs(root.right,val,h+1,target)
        

        
