class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        map1={}
        l=len(nums)
        count=0
        for i in range(l):
            if nums[i] in map1:
                count=count+map1[nums[i]]
            map1[nums[i]]=map1.get(nums[i],0)+1
        return count
