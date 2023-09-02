class Solution:
    def minExtraChar(self, s: str, dictionary: List[str]) -> int:
        set1=set(dictionary)
        l=len(s)
        dp=[0]*(l+1)


        for i in range(1,l+1):
            dp[i]=dp[i-1]+1
            for j in range(1,i+1):
                if s[j-1:i] in set1:
                    dp[i]=min(dp[i],dp[j-1])
        return dp[l]