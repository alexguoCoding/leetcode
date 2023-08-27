class Solution:
    def maskPII(self, s: str) -> str:
        if  not s[0].isalpha():
            #print(s)
            whole=""
            for i in range(len(s)):
                if s[i].isnumeric():
                    whole+=s[i]
            print(whole)
            result=""
            result=result+whole[len(whole)-4:len(whole)]
            #print(result)
            result="*"*3+"-"+"*"*3+"-"+result
            #print(result)
            if len(whole)==10:
                return result
            elif len(whole)==11:
                return "+*-"+result
            elif len(whole)==12:
                return "+**-"+result
            elif len(whole)==13:
                return "+***-"+result
            

                
            
          

        else:
            a=s.index('@')
            #print(a)
            front=s[0:a].lower()
            temp=""
            for i in range(5):
                temp+="*"

           
            front=front[0]+temp+front[len(front)-1]
            #print(front)

            back=s[a+1:len(s)].lower()
            #print(back)
            return front+"@"+back
