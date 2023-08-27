class Solution:
    def numSubarrayBoundedMax(self, nums: List[int], left: int, right: int) -> int:
        length=len(nums)
        dp=[0]*length
        l=0
        tempmax=0

        for r in range(0,length):
            if nums[r]>=left and nums[r]<=right:
                tempmax=r-l+1
                dp[r]=tempmax
            elif nums[r]<left:
                dp[r]=tempmax
            elif nums[r]>right:
                l=r+1
                tempmax=0
                

            


            #print(dp)
        return sum(dp)

            



