class Solution:
    def minIncrementForUnique(self, nums: List[int]) -> int:
        nums.sort()
        sum=0
        for i in range(0,len(nums)-1):
            if nums[i]>=nums[i+1]:
                diff=nums[i]-nums[i+1]
                sum=sum+diff+1
                nums[i+1]=diff+1+nums[i+1]
                #print(nums[i],nums[i+1])
            
            
            #print(nums)


        #print(nums)
        return sum
