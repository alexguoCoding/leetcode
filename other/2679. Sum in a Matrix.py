class Solution:
    def matrixSum(self, nums: List[List[int]]) -> int:
        height=len(nums)
        width=len(nums[0])
        for i in range(height):
            nums[i].sort()
        result=0
        for j in range(width):
            tempmax=-1
            for i in range(height):
                tempmax=max(tempmax,nums[i][j])
            result+=tempmax
        return result


        