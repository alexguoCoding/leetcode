class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        l=len(nums)
        leftmost=[0]*l


        minnum=float('inf')
        for i in range(l):
            minnum=min(nums[i],minnum)
            leftmost[i]=min(nums[i],minnum)


        rightmost=[0]*l


        maxnum=float('-inf')
        for i in range(l-1,-1,-1):
            maxnum=max(nums[i],maxnum)
            rightmost[i]=max(nums[i],maxnum)
        print(leftmost)
        print(rightmost)
        for i in range(l):
            if nums[i]>leftmost[i] and nums[i]<rightmost[i]:
                return True
        return False




