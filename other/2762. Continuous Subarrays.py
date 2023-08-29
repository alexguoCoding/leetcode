class Solution:
    def continuousSubarrays(self, nums: List[int]) -> int:
        cnt=Counter()
        left=0
        count=0

        for right in range(len(nums)):
            cnt[nums[right]]+=1
            
            while max(cnt)-min(cnt)>2:
                cnt[nums[left]]-=1
                if cnt[nums[left]]==0:
                    del cnt[nums[left]]
                left+=1
            #print(cnt,left,right,right-left+1)
            count+=right-left+1
        return count
            
