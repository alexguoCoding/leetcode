prime=[1]*(10**6+2)

for i in range(2,10**6+2):
    if prime[i]==1:
        for j in range(2*i,10**6+2,i):
            prime[j]=0
               
            

   
class Solution:

    def findPrimePairs(self, n: int) -> List[List[int]]:
        result=[]
        #print(prime)

     
        for i in range(2,math.floor((n)/2)+1):
            if prime[i] and prime[n-i]:
                result.append([i,n-i])
        return result
