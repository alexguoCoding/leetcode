# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class CBTInserter:

    def __init__(self, root: Optional[TreeNode]):
        self.root=root
        return None

        

    def insert(self, val: int) -> int:
        pend=[]
        pend.append(self.root)
        parentVal=-1
        while len(pend)!=0:
            curnode=pend[len(pend)-1]
            if curnode.left!=None:
                pend.insert(0,curnode.left)
            else:
                newNode=TreeNode(val)
                curnode.left=newNode
                parentVal=curnode.val
                
                break

            if curnode.right!=None:
                pend.insert(0,curnode.right)
            else:
                newNode=TreeNode(val)
                curnode.right=newNode
                parentVal=curnode.val
                break
            pend.pop()

           
        
        return parentVal
        

    def get_root(self) -> Optional[TreeNode]:

        return self.root


# Your CBTInserter object will be instantiated and called as such:
# obj = CBTInserter(root)
# param_1 = obj.insert(val)
# param_2 = obj.get_root()