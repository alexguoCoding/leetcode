class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
       
        #print(sortArray)
        #print(arr)
        le=len(arr)
        minN=float('inf')
        maxN=float('-inf')
        count=0
        l=0
        
        for r in range(le):
            minN=min(minN,arr[r])
            maxN=max(maxN,arr[r])
            
         
            if minN==l and maxN==r:
                count=count+1
                l=r+1
                minN=float('inf')
                maxN=float('-inf')





        

           






            