class Node(object):
    def __init__(self):
        self.childrens={}
        self.end=False
        self.l=0

class Solution:
    def minimumLengthEncoding(self, words: List[str]) -> int:
        words=list(set(words))
        print(words)
        parent=Node()
        set1=set()
        for word in words:
            temp=parent
            for w in reversed(word):
                if w in temp.childrens:
                    temp=temp.childrens[w]
                    temp.end=False
                    
                else:
                    temp.childrens[w]=Node()
                    temp=temp.childrens[w]
                    temp.end=True
            if temp.end==True :
                temp.l=len(word)
                set1.add(temp)
                print(temp.l)
        result=0
        for w in set1:
            if w.end==True:
                result+=w.l+1
 
     

            
        return result
