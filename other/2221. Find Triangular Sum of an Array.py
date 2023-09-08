class Solution:
    def triangularSum(self, nums: List[int]) -> int:
        l=len(nums)
        temp=nums
        while len(temp)!=1:
            newtemp=[0]*(len(temp)-1)
            for i in range(len(temp)-1):
                newtemp[i]=(temp[i]+temp[i+1])%10
            temp=newtemp
        return temp[0]
