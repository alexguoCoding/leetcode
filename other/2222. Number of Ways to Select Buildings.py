class Solution:
    def numberOfWays(self, s: str) -> int:
        l=len(s)
        print(l)
        left0=[0]*l
        left1=[0]*l
        right0=[0]*l
        right1=[0]*l
    
        for i in range(1,l):
            if s[i-1]=="0":
                left0[i]=left0[i-1]+1
            else:
                left0[i]=left0[i-1]
            if s[i-1]=="1":
                left1[i]=left1[i-1]+1
            else:
                left1[i]=left1[i-1]
        #print(left0,left1)
        for i in range(l-2,-1,-1):
            if s[i+1]=="0":
                right0[i]=right0[i+1]+1
            else:
                right0[i]=right0[i+1]
            if s[i+1]=="1":
                right1[i]=right1[i+1]+1
            else:
                right1[i]=right1[i+1]
        #print(right0,right1)
        sum1=0
        for i in range(1,l-1):
            if s[i]=="0":
                sum1+=left1[i]*right1[i]
            else:
                sum1+=right0[i]*left0[i]
        return sum1

 

        