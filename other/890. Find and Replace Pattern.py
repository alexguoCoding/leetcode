class Solution:
    def findAndReplacePattern(self, words: List[str], pattern: str) -> List[str]:
        result=[]
        
        for word in words:
            map1={}
            map2={}
            check=True
            for i in range(len(word)):
                if pattern[i] not in map1 and word[i] not in map2:
                   map1[pattern[i]]=word[i]
                   map2[word[i]]=pattern[i]
                else:
                    if pattern[i] in map1:
                        if map1[pattern[i]]!=word[i]:
                            check=False
                    if word[i] in map2:
                        if map2[word[i]]!=pattern[i]:
                            check=False
                    
            if check==True:
                result.append(word)
                #print(word)
        return result