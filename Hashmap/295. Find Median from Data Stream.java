class MedianFinder {
    PriorityQueue<Integer> minheap=new PriorityQueue<>();
    PriorityQueue<Integer> maxheap=new PriorityQueue<>((a,b)->(b-a));
    int time=0;

    public MedianFinder() {
        
    }
    
    public void addNum(int num) {
        if(time==0){
             minheap.add(num);
        }
        else if(time==1){
            minheap.add(num);
            maxheap.add(minheap.poll());
        }
        else{
            if(num>= minheap.peek()){
            minheap.add(num);
                if(Math.abs(minheap.size()-maxheap.size())==2){
                    maxheap.add(minheap.poll());
                }
          
            }
            else{
                 maxheap.add(num);
                if(Math.abs(minheap.size()-maxheap.size())==2){
                    minheap.add(maxheap.poll());  
                }
                
            
            }
        }
        // System.out.println("num"+num);
        // System.out.println("minheap.peek()"+minheap.peek());
        // System.out.println("maxheap.peek()"+maxheap.peek());

        time++;

        

        
        
    }
    
    public double findMedian() {
        
        // System.out.println();
        // System.out.println();
        if(minheap.size()>maxheap.size()){
            return (double)minheap.peek();
        }
        else if(minheap.size()<maxheap.size()){
            return (double)maxheap.peek();
        }
        else{
            return (double)(maxheap.peek()+minheap.peek())/2;
        }

        
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */