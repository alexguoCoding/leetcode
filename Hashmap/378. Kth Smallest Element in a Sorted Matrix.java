class Solution {
    public int kthSmallest(int[][] matrix, int k) {
        PriorityQueue<Integer> maxheap=new PriorityQueue<>((a,b)->(b-a));
      
        for(int i=0;i<matrix.length;i++){
             for(int j=0;j<matrix[i].length;j++){
                 maxheap.add(matrix[i][j]);
                 if(maxheap.size()>k){
                     maxheap.remove();
                 }
                 
            }
        }
        return maxheap.poll();
        
        
    }
}