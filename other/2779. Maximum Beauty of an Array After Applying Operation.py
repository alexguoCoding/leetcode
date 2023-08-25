class Solution:
    def maximumBeauty(self, nums: List[int], k: int) -> int:
        nums.sort()
        l=0
        count=0
        ans=-1
        for i,num in enumerate(nums):
            while nums[i]-nums[l]>2*k:
                l=l+1
                count=count-1
            count=count+1
            ans=max(count,ans)

            
            #print(i,num)
        return ans
       
     