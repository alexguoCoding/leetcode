class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        count=0
        l=len(nums)

        map1={}
        map1[0]=1

        totalsum=0

        for i in range(0,l):
            totalsum+=nums[i]


            if totalsum-goal in map1:
                count=count+map1[totalsum-goal]

            
            map1[totalsum]=map1.get(totalsum,0)+1
 
            

        #print(presum)
        #print(count)
        

            
    


 

                   
            
        return count
