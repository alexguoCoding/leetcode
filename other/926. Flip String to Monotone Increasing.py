class Solution:
    def minFlipsMonoIncr(self, s: str) -> int:
        l=len(s)
        dp=[[0,0] for _ in range(l)]
        if s[0]=="1":
            dp[0][1]=0
         
            dp[0][0]=1
        else:
            dp[0][0]=0
            dp[0][1]=1

        
     

        for i in range(1,l):
            if s[i]=="0": 
                dp[i][0]=dp[i-1][0]
                dp[i][1]=min(dp[i-1][0],dp[i-1][1])+1
            elif s[i]=="1":
                dp[i][0]=dp[i-1][0]+1
                dp[i][1]=min(dp[i-1][0],dp[i-1][1])
            #print(dp)
          


            