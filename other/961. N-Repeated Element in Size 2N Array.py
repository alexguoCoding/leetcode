class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
        map1={}
        for i in range(len(nums)):
            map1[nums[i]]=map1.get(nums[i],0)+1
           # print(len(nums) / 2, map1[nums[i]],nums[i])
            if map1[nums[i]]==math.floor(len(nums) / 2):
                return nums[i]
        
        
        