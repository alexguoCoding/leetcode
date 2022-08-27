class Solution {
     HashMap<Integer,Boolean> map=new HashMap<>();
    public int nthUglyNumber(int n) {
        PriorityQueue<Long> minheap=new PriorityQueue<>();
          HashSet<Long> set=new HashSet<>();
         int[] num={2,3,5};
       minheap.add((long)1);
        int j=1;
       while(j<n){
            Long temp=minheap.poll();
            for(int i=0;i<3;i++){
                if(!set.contains(temp*num[i])){
                    minheap.add(temp*num[i]);
                    set.add(temp*num[i]);
                }
            

            }
           j++;


           
            
        }
    

        return minheap.poll().intValue();
        
        
    }
   
    
}