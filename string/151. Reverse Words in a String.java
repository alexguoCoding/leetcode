class Solution {
    public String reverseWords(String s) {
        char[] ch = s.toCharArray();
        int start=0;
        int end=s.length()-1;
        while(start<end&&ch[start]==' '){
            ++start;       
        }
        while(start<end&&ch[end]==' '){
            --end;       
        }

        Deque<String> deque = new LinkedList<>();

        StringBuilder sb = new StringBuilder();
        for(int i=start;i<=end;i++){

            if(ch[i]!=' '){
                sb.append(ch[i]);
                
            }


            else{
                if(ch[i+1]!=' '){
                    deque.addFirst(sb.toString());
                    deque.addFirst(" ");
                    sb = new StringBuilder();
                }

            }

        }
        deque.addFirst(sb.toString());

        String out="";
        for (String verb : deque) { 
            out=out+verb;
        } 
        return out;
    }  
        
        
    
}