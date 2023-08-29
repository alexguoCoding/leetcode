class Solution:
    def longestAlternatingSubarray(self, nums: List[int], threshold: int) -> int:
        l=len(nums)
        even=False
        count=0
        for start in range(l):
            if nums[start]>threshold or nums[start]%2!=0:
                even=False
            else:
                even=False
                #print(start)
                for right in range(start,l):
                

                    if even==True and nums[right]%2!=0 and nums[right]<=threshold:
                        even=False
                    elif even==False and nums[right]%2==0 and nums[right]<=threshold:
                        even=True
                    else:
                        count=max(count,right-start)
                        print(start,right,even)
                        break
                    #print(start,right,even)
                    count=max(count,right-start+1)

                


               
        return max(0,count)
            

