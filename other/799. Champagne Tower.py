class Solution:
    def champagneTower(self, poured: int, query_row: int, query_glass: int) -> float:
        cham=[poured]
        for i in range(0,query_row):
            nextcham=[0]*(len(cham)+1)
            for j in range(len(cham)):
                if cham[j]>1:
                    nextcham[j]+=(cham[j]-1)/2
                    nextcham[j+1]+=(cham[j]-1)/2
            cham=nextcham
        return min(cham[query_glass],1)


