class Solution {
    public String minRemoveToMakeValid(String s) {
        char[] ch1=s.toCharArray();
        Deque<Integer> deque=new LinkedList<>();
       
        StringBuilder sb = new StringBuilder(s);
       // sb.setCharAt(4, 'x');
        
        for(int i=0;i<s.length();i++){
            if(s.charAt(i)=='('){
                deque.addFirst(i);
            }
            else if(s.charAt(i)==')'){
                if(deque.size()!=0){
                    deque.removeFirst();
                }
                else{
                      sb.setCharAt(i, '!');
                }
            }
        }
        while(deque.size()!=0){
             sb.setCharAt(deque.poll(), '!');
         
        }
        String result=sb.toString();
        String result1=result.replaceAll("!","");

        return result1;
      
    }
}