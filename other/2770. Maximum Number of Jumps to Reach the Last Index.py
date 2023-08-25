class Solution:
    def maximumJumps(self, nums: List[int], target: int) -> int:
        l=len(nums)
        dp=[-1]*l
        dp[0]=0
        #print(dp)
       
        for i in range(1,l):
            for j in range(0,i):
                if abs(nums[i]-nums[j])<=target:
                    if dp[j]!=-1:
                        dp[i]=max(dp[j]+1,dp[i])
           
                   
        #print(dp)
        return dp[l-1]
