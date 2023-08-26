# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
        result=[]
        map1={}
        set1=set()
        
        
        self.dfsrecord(root,map1,root)
   
        self.dfsbrfore(target,map1,set1,0,result,k)
        return result

    def dfsrecord(self, root: TreeNode,map1,origin):
        if root==None:
            return
        
        map1[root.left]=root
        map1[root.right]=root

        self.dfsrecord(root.left,map1,origin)
        self.dfsrecord(root.right,map1,origin)

    def dfsbrfore(self, root: TreeNode,map1,set1,h,result,k):
        if root==None:
            
            return
        #print(root.val,h,k)
        if h==k:
            result.append(root.val)
            return
        set1.add(root)
        
        if root.left not in set1:
            self.dfsbrfore(root.left,map1,set1,h+1,result,k)
        if root.right not in set1:
            self.dfsbrfore(root.right,map1,set1,h+1,result,k)
        if root in map1:
            if map1[root] not in set1:
                self.dfsbrfore(map1[root],map1,set1,h+1,result,k)

            
        
        

