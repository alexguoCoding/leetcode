class Solution {
    public int[][] kClosest(int[][] points, int k) {
        // int[] Pair=new int[2];
        PriorityQueue<int[] > maxheap=new  PriorityQueue<>((a,b)->(-a[0]*a[0]-a[1]*a[1]+b[0]*b[0]+b[1]*b[1]));
   
        for(int i=0;i<points.length;i++){
            maxheap.add(points[i]);
            if(maxheap.size()>k){
                maxheap.remove();
            
            }
        }
          int[][] result=new int[k][2];
                                                           
            int i=0;                                    
          while(maxheap.size()!=0){
               int[] temp=new int[2];
              temp=maxheap.poll();
                 result[i]=temp;
              i++;
          }
        return result;
                                                 
                            
        
    }
}