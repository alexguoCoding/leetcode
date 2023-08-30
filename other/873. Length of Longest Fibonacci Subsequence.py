class Solution:
    def lenLongestFibSubseq(self, arr: List[int]) -> int:
        l=len(arr)
        dp=[[0]*l for _ in range(l)]
        map1={}
        for i in range(len(arr)):
            map1[arr[i]]=i
        result=0
        ##print(map1)
        for i in range(2,l):
            for j in range(i-1,-1,-1):
                if arr[j]*2<=arr[i]:
                    break
                if arr[i]-arr[j] in map1:
                    k=map1[arr[i]-arr[j]]
                    dp[i][j]=max(dp[j][k]+1,3)
                    result=max(result,dp[i][j])
            ##print(dp)
        return result

'''
        for i in range(2,l):
            for j in range(0,i):
                if arr[i]-arr[j] in set1:
                    dp[i]=max(dp[j]+1,3)
            print(dp)
'''
               
