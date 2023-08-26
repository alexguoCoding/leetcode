class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        sortArray=sorted(arr)
        #print(sortArray)
        #print(arr)
        l=len(arr)
        map1={}
        map2={}
        count=0
        for i in range(l):
            map1[sortArray[i]]=map1.get(sortArray[i],0)+1
            map2[arr[i]]=map2.get(arr[i],0)+1
            #print(map1)
            #print(map2)
            test=True
            if len(map1)==len(map2):

                for a,b in map1.items():
                    if a in map2:
                        if map2[a]!=b:
                            test=False
                    else:
                        test=False
                    

                        
                        
            else:
                test=False
            if test:
                count=count+1
                map1={}
                map2={}





            
        

  
        return count