class Solution:
    def maxWidthRamp(self, nums: List[int]) -> int:
        sortlist=[]
        for i in range(len(nums)):
            sortlist.append([nums[i],i])
        sortlist=sorted(sortlist, key=lambda x: x[0])
        #print(sortlist)
     
        lowest=float('inf')
        result=0
        for i in range(len(nums)):
            lowest=min(lowest,sortlist[i][1])
            #print(i)
            result=max(result,sortlist[i][1]-lowest)
        return result
             