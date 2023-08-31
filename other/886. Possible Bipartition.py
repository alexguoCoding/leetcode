class UnionFind:
    def __init__(self):
        self.parent=[0]*100000
        for i in range(0,100000):
            self.parent[i]=i

      
    def connect(self, a,b):
        pa=self.find(a)
        pb=self.find(b)
        if pa==pb:
            return 
        self.parent[pa]=pb

    def find(self, a):
        if self.parent[a]!=a:
            self.parent[a]=self.find(self.parent[a])
        
        return self.parent[a]
    def check(self,a,b):
        if self.find(a)==self.find(b):
            return True
        else:
            return False



class Solution:
    def possibleBipartition(self, n: int, dislikes: List[List[int]]) -> bool:
        l=len(dislikes)
        uf=UnionFind()

        for i in range(l):
            uf.connect(dislikes[i][0],dislikes[i][1]+10000)
            uf.connect(dislikes[i][1],dislikes[i][0]+10000)
            if uf.check(dislikes[i][0],dislikes[i][1]):
                return False
        return True



