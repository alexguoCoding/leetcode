class Solution:
    def punishmentNumber(self, n: int) -> int:
        result=[]
        temarr=[]
        time=[0]*1
        for i in range(1,n+1):
            time[0]=0
            self.check(str(i*i),i,0,temarr,result,time)


        return sum(result)
    def check(self, num,target,start,temarr,result,time):

        l=len(num)
        if start==len(num):
            if self.checksum(temarr,target) and time[0]==0:
                ##print("time",time)
                time[0]=1

                result.append(target*target)
                #print(target,temarr,result)
            return
        for i in range(start+1,l+1):
            temarr.append(int(num[start:i]))
            self.check(num,target,i,temarr,result,time)
            temarr.pop()
       

    def checksum(self,temarr,target):
        if sum(temarr)==target:
            return True
        else:
            return False