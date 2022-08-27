class BrowserHistory {

    Deque<String> future=new LinkedList<>();
     Deque<String> cur=new LinkedList<>();
  

    public BrowserHistory(String homepage) {
        cur.addFirst(homepage);

    }
    
    public void visit(String url) {
        cur.addFirst(url);
        future=new LinkedList<>();
        
    }
    
    public String back(int steps) {
         if(steps>=cur.size()){
            steps=cur.size()-1;
        }       
       while(steps!=0){
           future.addFirst(cur.pollFirst());
           steps--;
       }
        return cur.getFirst();
        
        
    }
    
    public String forward(int steps) {
        if(steps>future.size()){
            steps=future.size();
        }
       while(steps!=0){
           cur.addFirst(future.pollFirst());
           steps--;
       }
        return cur.getFirst();
        
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * BrowserHistory obj = new BrowserHistory(homepage);
 * obj.visit(url);
 * String param_2 = obj.back(steps);
 * String param_3 = obj.forward(steps);
 */