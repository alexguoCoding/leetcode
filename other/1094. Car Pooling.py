class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        l=len(trips)
        diffArray=[0]*1001
        #print(diffArray)
        diffArray[0]=0
        for i in range(l):
            diffArray[trips[i][1]]=diffArray[trips[i][1]]+trips[i][0]
            diffArray[trips[i][2]]=diffArray[trips[i][2]]-trips[i][0]
        for i in range(1,1001):
            diffArray[i]=diffArray[i]+diffArray[i-1]
        #print(diffArray)
        for i in range(0,1001):
            #print(i)
            #print(diffArray[i],capacity)
            if diffArray[i]>capacity:
                return False

       

        return True
