class Solution:
    def robotSim(self, commands: List[int], obstacles: List[List[int]]) -> int:
        dirs=[[0,1],[1,0],[0,-1],[-1,0]]
        set1=set(tuple(obstacle) for obstacle in obstacles)
        #print(set1)


        obs=[]

       
        pos=[0,0]
        dir=0
        result=0


        #0 north 1 East  2 South 3 West 


        for command in commands:
            
            if command>0:
                print(command)
                for i in range(0,command):
                    pos[0]+=dirs[dir][0]
                    pos[1]+=dirs[dir][1]
                    if tuple([pos[0],pos[1]]) in set1:
                        pos[0]-=dirs[dir][0]
                        pos[1]-=dirs[dir][1]
                        break
                    #print(pos)
            else:
                if command==-1:
                    dir=(dir+1)%4
                else:
                    dir=(dir+3)%4
           
            result=max(result,math.pow(pos[0],2)+math.pow(pos[1],2))
        return math.floor(result)






