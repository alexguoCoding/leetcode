class Solution:

    def numSpecialEquivGroups(self, words: List[str]) -> int:
        set1=set()
        result=0
        for word in words:
            l=len(word)
            even=[0]*26
            
            for i in range(0,l,2):
                even[ord(word[i])-ord('a')]=even[ord(word[i])-ord('a')]+1
            odd=[0]*26
            
            for i in range(1,l,2):
                odd[ord(word[i])-ord('a')]=odd[ord(word[i])-ord('a')]+1

            temp=even+odd
            print(temp)
            
            if tuple(temp)  not in set1:
                set1.add(tuple(temp))
                result=result+1
            #print(word)
        return result



