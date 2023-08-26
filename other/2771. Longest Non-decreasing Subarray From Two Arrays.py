class Solution:
    def maxNonDecreasingLength(self, nums1: List[int], nums2: List[int]) -> int:
        l=len(nums1)

        dp = [[0, 0] for _ in range(l)]
       
        dp[0][0]=1
        dp[0][1]=1
        res=1
        for i in range(1,l):
            temp1=1
            if nums1[i]>=nums1[i-1]:
                temp1=dp[i-1][0]+1
            if nums1[i]>=nums2[i-1]:
                temp1=max(temp1,dp[i-1][1]+1)
            dp[i][0]=temp1
            temp2=1
            if nums2[i]>=nums1[i-1]:
                temp2=dp[i-1][0]+1
            if nums2[i]>=nums2[i-1]:
                temp2=max(temp2,dp[i-1][1]+1)
            dp[i][1]=temp2

            res=max(res,temp2,temp1)
         





        return res
