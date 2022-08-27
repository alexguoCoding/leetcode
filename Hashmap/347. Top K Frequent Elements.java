class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer,Integer> map= new HashMap<>();
        for(int i=0;i<nums.length;i++){
            if(map.containsKey(nums[i])){
                map.put(nums[i],map.get(nums[i])+1);
                
            }
            else{
                map.put(nums[i],1);
            }
        }
        PriorityQueue<Integer> maxheap=new PriorityQueue<>((n1, n2) -> map.get(n1) - map.get(n2));
        for (Map.Entry<Integer,Integer>  temp: map.entrySet()) {

                maxheap.add(temp.getKey()); 

                if(maxheap.size()>k){
                    maxheap.remove();
                }
        }
                    
                
            

      
 

        
        int[] result=new int[k];

       for(int i=0;i<k;i++){
            result[i]=maxheap.poll();
        }
        return result;
        
        
    }
}