class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        map1={}
        l=len(nums)
        for i in range(l):
            if nums[i]==0:
                nums[i]=-1
        sum1=0
        maxsum=0
        map1[0]=-1
        for i in range(l):
            sum1+=nums[i]
            if sum1 in map1:
                maxsum=max(i-map1[sum1],maxsum)
            else:
                map1[sum1]=i
        return maxsum



            