class Solution:
    def flipgame(self, fronts: List[int], backs: List[int]) -> int:
        set1=set()
        
        for i in range(len(fronts)):
            if fronts[i]==backs[i]:
                set1.add(fronts[i])
        min1=100000
        for i in range(len(fronts)):
            if fronts[i] not in set1 :
                min1=min(min1,fronts[i])
        for i in range(len(fronts)):
            if backs[i] not in set1 :
                min1=min(min1,backs[i])


            

        result = 0 if min1 == 100000 else min1
        return result

