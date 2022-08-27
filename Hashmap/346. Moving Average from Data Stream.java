class MovingAverage {
    Deque<Integer> queue;
    int size;

    public MovingAverage(int size) {
          queue=new LinkedList<>();
         this.size=size;
        
        
    }
    
    public double next(int val) {
            int sum=0;
          if(queue.size()==size){
            queue.removeLast();

        }
            queue.addFirst(val);
        for(int i=0;i<queue.size();i++){
           int  test=queue.getFirst();
            //System.out.println("test"+test);
            int num=queue.pollFirst();
            sum+=num;
            queue.addLast(num);

            
        }
        // System.out.println(queue.size());



            return (double)sum/queue.size();

        
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * MovingAverage obj = new MovingAverage(size);
 * double param_1 = obj.next(val);
 */