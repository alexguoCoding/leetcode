class Solution:
    def longestValidSubstring(self, word: str, forbidden: List[str]) -> int:
        set1=set()
        for i,w in enumerate(forbidden):
            set1.add(w)
        print(set1)
        left=0
        count=0
        tempcount=0
        l=len(word)

        for i in range(1,l+1):
            j=i-1
            check=True
            
  
            while j>=0 and i-j<=10 and j>=left:
                if word[j:i] in set1:
                    check=False
                    tempcount=0
                    left=j+1
                   
                    break;
                    
                j=j-1
            count=max(i-left,count)
            #print(i,left,i-left,word[left:i],word[left:i+1])

               
            
        
        
        return count