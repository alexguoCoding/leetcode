class Solution:
    def checkArray(self, nums: List[int], k: int) -> bool:
        l=len(nums)
        diff=[0]*l
        pre=0
  
        for i in range(l):

            nums[i]=nums[i]+diff[i]
         
            if nums[i]>0  :
                if i+k>l:
                    return False
                
                temp=nums[i]
                diff[i]-=temp
                if i+k<l:
                    diff[i+k]+=temp
                nums[i]=0
            if i+1<l:
                diff[i+1]=diff[i+1]+diff[i]

            #print(diff)
            #print(nums)


        for i in range(l):
            if nums[i]!=0:
                return False
       

        return True