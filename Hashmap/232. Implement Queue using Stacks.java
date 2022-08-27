class MyQueue {
    //addfirst
    //pillfirst
        Deque<Integer> stack;
        Deque<Integer> reverseStack;
        public MyQueue() {
        stack=new  LinkedList<>();
         reverseStack=new  LinkedList<>();
            
        }
        
        public void push(int x) {
            stack.addFirst(x);
            
            
        }
        
        public int pop() {
            while(stack.size()>0){
               // System.out.println(stack.getFirst());
                reverseStack.addFirst(stack.pollFirst());
            }
            int num= reverseStack.pollFirst();
            while(reverseStack.size()>0){
                stack.addFirst(reverseStack.pollFirst());
            }
            return num;
        }
        
        public int peek() {
            while(stack.size()>0){
                  //System.out.println(stack.getFirst());
                reverseStack.addFirst(stack.pollFirst());
            }
            int num= reverseStack.getFirst();
            while(reverseStack.size()>0){
                stack.addFirst(reverseStack.pollFirst());
            }
            return num;
        }
            
            
        
        
        public boolean empty() {
           if(stack.size()==0){
                return true;
            }
            return false;
        }
    }
    
    /**
     * Your MyQueue object will be instantiated and called as such:
     * MyQueue obj = new MyQueue();
     * obj.push(x);
     * int param_2 = obj.pop();
     * int param_3 = obj.peek();
     * boolean param_4 = obj.empty();
     */