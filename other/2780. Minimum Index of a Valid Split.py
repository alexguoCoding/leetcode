class Solution:
    def minimumIndex(self, nums: List[int]) -> int:
        hashtable={}
        maxnumcount=-1
        maxnum=-1
        l=len(nums)


        for i,num in enumerate(nums):
            hashtable[num]=hashtable.get(num,0)+1
        for key,value in hashtable.items():
            if maxnumcount<value:
                maxnum=key
                maxnumcount=value
        count=0
        for i,num in enumerate(nums):
            if maxnum==num:
                count=count+1
            if count*2>i+1 and (maxnumcount-count)*2>l-i-1:
                return i

        


        #print(hashtable)
        return -1