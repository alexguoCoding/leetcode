class Solution:
    def totalHammingDistance(self, nums: List[int]) -> int:
        l=len(nums)
        nummaxIndex=0
        nummax=nums[0]
        for i in range(l):
            if nums[i]>nummax:
                nummaxIndex=i
                nummax=nums[i]
        print(nummaxIndex,nummax)
        result=0
        while nums[nummaxIndex]!=0:
            count=0
            for i in range(l):
                count+=nums[i]&1
                nums[i]=nums[i]>>1
            result+=count*(l-count)
            #print(nums)
        return result
            
            