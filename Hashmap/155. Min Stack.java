class MinStack {
    Deque <Integer>stack;
    public MinStack() {
         stack=new LinkedList<>();
        
    }
    
    public void push(int val) {
        // System.out.println("a");
      
        if(stack.size()==0){
                // System.out.println("1");
             stack.addFirst(val);
            stack.addFirst(val);
        }
        else{
            int min=Math.min(stack.getFirst(),val);
             stack.addFirst(val);
             stack.addFirst(min);
            
        }

      
       
    }
    
    public void pop() {
        int min=stack.pollFirst();
        int result=stack.pollFirst();

        
    }
    
    public int top() {

       int min=stack.pollFirst();
        int result=stack.getFirst();
        stack.addFirst(min);
        return result;
        
    }
    
    public int getMin() {

        return stack.getFirst();
        
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */