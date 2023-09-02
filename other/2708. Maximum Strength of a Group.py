class Solution:
    def maxStrength(self, nums: List[int]) -> int:
        nums.sort()
  
        
        l=len(nums)
        positive=[]
        negative=[]
        zeros=[]
        result=1
        if len(nums)==1:
            return nums[0]
        for i in range(l):
            if nums[i]>0:
                positive.append(nums[i])
        for i in range(l):
            if nums[i]==0:
                zeros.append(nums[i])
        for i in range(l):
            if nums[i]<0:
                negative.append(nums[i])
        if len(positive)>0 or len(negative)>=2:
            result=1
            for i in range(len(positive)):
                result*=positive[i]
            if len(negative)%2==0:
                for i in range(0,len(negative)):
                    result*=negative[i]
            else:
                for i in range(0,len(negative)-1):
                    result*=negative[i]
        elif len(positive)==0 and len(negative)==1 and len(zeros)!=0:
            return 0
        elif len(positive)==0 and len(negative)>1:
            result=1

            if len(negative)%2==0:
                for i in range(0,len(negative)):
                    result*=negative[i]
            else:
                for i in range(0,len(negative)-1):
                    result*=negative[i]
        elif len(positive)==0 and len(negative)==0:
            return 0
