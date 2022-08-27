lass Solution {
    public String removeDuplicates(String s, int k) {
        char[] ch1= s.toCharArray();
        Deque<Character> stack=new LinkedList<>();
        Deque<Integer> count=new LinkedList<>();
        
        for(int i=0;i<ch1.length;i++){
            if(stack.size()==0){
                stack.add(ch1[i]);
                count.add(1);
                 // System.out.println(ch1[i]);
            }
            else{
                if(ch1[i]==stack.getFirst()){
                    if(count.getFirst()==k-1){
                        for(int j=0;j<k-1;j++){
                            stack.removeFirst();
                            count.removeFirst();
                        }
                    }
                    else{
                        stack.addFirst(ch1[i]);
                        count.addFirst(count.getFirst()+1);
                    }
                }
                else{
                        stack.addFirst(ch1[i]);
                        count.addFirst(1);
                }
            }
        }
          // StringBuilder sb = new StringBuilder(s);
        StringBuilder sb=new StringBuilder();
        int size=stack.size();
        System.out.println(size);
        for(int i=0;i<size;i++){
            sb.append(stack.pollLast());
        }
        return sb.toString();
    }
}