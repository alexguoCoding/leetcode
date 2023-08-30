class Solution:
    def removeTrailingZeros(self, num: str) -> str:
        right=len(num)
        for right in range(len(num)-1,-1,-1):
            #print(right)
            if num[right]!="0":
                return num[0:right+1]
        return ""

     