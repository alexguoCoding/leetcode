class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:


        maxtarget = max(flights[i][1] for i in range(len(flights)))
        dp = [[float('inf')] * n for _ in range(k + 2)]
      
        dp[0][src]=0
        for i in range(1,k+2):
            for j in range(len(flights)):
                dp[i][flights[j][1]]=min(dp[i-1][flights[j][0]]+flights[j][2],dp[i][flights[j][1]])
            #print(dp)
        result=float('inf')
        for i in range(0,k+2):
            result=min(result,dp[i][dst])
        if result==float('inf'):
            return -1
        return result