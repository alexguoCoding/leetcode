class Solution {
    public int longestSubarray(int[] nums, int limit) {
        int result=0;

         int l=0;
            // PriorityQueue<Integer> minheap=new PriorityQueue<>();
            // PriorityQueue<Integer> maxheap=new PriorityQueue<>((a,b)->(b-a));
            TreeMap<Integer,Integer> sortmap=new TreeMap<>();
        for(int r=0;r<nums.length;r++){

            sortmap.put(nums[r],sortmap.getOrDefault(nums[r],0)+1);
 // System.out.println("put:"+nums[r]);
            while(l<r&&Math.abs(sortmap.lastKey()-sortmap.firstKey())>limit){
                // System.out.println("sortmap.lastKey()"+sortmap.lastKey());
                // System.out.println("sortmap.firstKey()"+sortmap.firstKey());
                // System.out.println("l"+nums[l]);
                // System.out.println("r"+nums[r]);
                if( sortmap.get(nums[l])>0){
                    sortmap.put(nums[l], sortmap.get(nums[l])-1);
                }
                if( sortmap.get(nums[l])==0){
                     sortmap.remove(nums[l]);
                }
                 
                 l++; 
            }

            result=Math.max(result,r-l+1);

        }
       
                
            
        
        return result;
        
    }
}