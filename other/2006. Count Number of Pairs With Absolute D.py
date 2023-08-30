class Solution:
    def countKDifference(self, nums: List[int], k: int) -> int:
        map1={}
        l=len(nums)
        count=0
        for i in range(l):
            if nums[i]+k in map1:
                count=count+map1[nums[i]+k]
            if nums[i]-k in map1:
                count=count+map1[nums[i]-k]
            map1[nums[i]]=map1.get(nums[i],0)+1
        return count