class Solution:
    def count(self,n):
        count=[0]*10
        while n!=0:
            count[n%10]=count[n%10]+1
            n=math.floor(n/10)

        return tuple(count)
        


    def reorderedPowerOf2(self, n: int) -> bool:
        start=1
        set2=set()

        for i in range(1,32):
            
            set2.add(self.count(start))
            start=start*2

        return True if self.count(n) in set2 else False

        
        