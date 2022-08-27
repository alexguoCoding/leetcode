class HitCounter {
    Deque <Integer>queue;

    public HitCounter() {
        
    queue=new LinkedList<>();
    }
    
    public void hit(int timestamp) {
        queue.addFirst(timestamp);
    }
    
    public int getHits(int timestamp) {
         // queue.addFirst(timestamp);
        int size=queue.size();
        for(int i=0;i<size;i++){
            int num=queue.getLast();
            //System.out.println(num);
            if(timestamp-300>=num){
                // System.out.println(queue.getLast());
                queue.removeLast();
               
            }
            else{
                 queue.addFirst(queue.pollLast());
            }
           
        }

        return queue.size();
        
    }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * HitCounter obj = new HitCounter();
 * obj.hit(timestamp);
 * int param_2 = obj.getHits(timestamp);
 */