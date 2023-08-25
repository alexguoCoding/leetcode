class Solution:
    def corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:
        l=len(bookings)
        diffArray=[0]*(n)
        for i in range(l):
            diffArray[bookings[i][0]-1]+=bookings[i][2]
            if bookings[i][1]<n:
                diffArray[bookings[i][1]]-=bookings[i][2]
            
            
        for i in range(1,len(diffArray)):
            diffArray[i]+=diffArray[i-1]
        return diffArray
        #print(diffArray)
