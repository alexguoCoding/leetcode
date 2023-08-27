class Solution:
    def numFactoredBinaryTrees(self, arr: List[int]) -> int:
        maxNum=max(arr)
        #print(maxNum)
        #dp=[0]*(maxNum+1)
        map1={}
        arr=sorted(arr)
        #print(arr)
        set1=set()
        for i in range(len(arr)):
            set1.add(arr[i])
        for i in range(0,len(arr)):
            map1[arr[i]]=1
            #dp[arr[i]]=1
        #print(map1)
           
        
        for i in range(len(arr)):
            for j in range(0,i):
                
                if arr[i]/arr[j] in set1 and arr[j] in set1:
                    #print(arr[i],j)

                    map1[arr[i]]+=map1[arr[j]]*map1[arr[i]/arr[j]]
                        #dp[arr[i]]+=dp[j]*dp[math.floor(arr[i]/j)]
                    map1[arr[i]]=map1[arr[i]]%(math.pow(10, 9)+7)
                  


                    
            #print(dp)

        result=0
        for k,v in map1.items():
            result+=v
        return math.floor((result)%(math.pow(10, 9)+7))