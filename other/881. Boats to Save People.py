class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people=sorted(people)
        l=0
        r=len(people)-1
        count=0
        print(people)

        while l<r:
            if people[l]+people[r]>limit:
                r=r-1
                count=count+1
            else:
                r=r-1
                l=l+1
                count=count+1
        if r==l:
            count=count+1

                
            
            

 

            
        return count

