class Solution:
    def findReplaceString(self, s: str, indices: List[int], sources: List[str], targets: List[str]) -> str:
        work=list(s)
        Add=0
        sort1=[]
        for i in range (len(indices)):
            sort1.append([indices[i],sources[i],targets[i]])
        sort1=sorted(sort1, key=lambda x: x[0])
        #print(s)
        #print(sort1)

        for i in range (len(sort1)):
            
            if s[sort1[i][0]:sort1[i][0]+len(sort1[i][1])]==sort1[i][1]:
                #print(s[indices[i]:indices[i]+len(sources[i])])
                #print(Add,indices[i]+Add,indices[i]+len(sources[i]))
               
                work[sort1[i][0]+Add:sort1[i][0]+len(sort1[i][1])+Add]=list(sort1[i][2])
                Add=len(sort1[i][2])-len(sort1[i][1])+Add
                #print(len(targets[i]))
           
                #print(work)


 
      

        return  "".join(work)