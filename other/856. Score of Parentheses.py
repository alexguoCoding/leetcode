class Solution:
    def scoreOfParentheses(self, s: str) -> int:
        stack=[]
        print(s)
        for i in range(len(s)):
            if s[i]=='(':
                stack.append(s[i])
            elif s[i]==')':
                if stack[len(stack)-1]=='(':
                    stack.pop()
                    stack.append(1)
                elif stack[len(stack)-2]=='(':
                    tempn=stack.pop()
                    stack.pop()
                    stack.append(tempn*2)
                while len(stack)>2 and stack[len(stack)-1]!='(' and stack[len(stack)-2]!='(' :
                    tempn=stack.pop()
                    tempm=stack.pop()
                    stack.append(tempn+tempm)
            print(stack)
        
        return sum(stack)
