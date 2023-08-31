# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def allPossibleFBT(self, n: int) -> List[Optional[TreeNode]]:
        return self.dfs(n)

    def dfs(self, n):
        
        headlist=[]
        

        if n==1:

            headlist.append(TreeNode(0))

            return headlist
        n=n-1
        

        for i in range(1,n,2):
           
            leftlist=self.dfs(i)
            rightlist=self.dfs(n-i)
            #print(leftlist)

            for leftnode in leftlist:
                for rightnode in rightlist:
                    
                    head= TreeNode(0)
                    head.left=leftnode
                    head.right=rightnode
                    headlist.append(head)
        
        
        return headlist

