class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        stack=[]
        j=0
        for i in range(len(pushed)):
            stack.append(pushed[i])
            while len(stack)>0 and popped[j]==stack[len(stack)-1]:
                popped.pop(0)
                stack.pop()
        if len(stack)!=0:
            return False
        return True

