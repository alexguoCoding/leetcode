class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Map<Integer,Integer> map=new HashMap<>();
        for(int i=0;i<nums1.length;i++){
            if(!map.containsKey(nums1[i])){
                map.put(nums1[i],1);
            }
            else{
                map.put(nums1[i],map.get(nums1[i])+1);
            }

        }
         LinkedList<Integer> result=new LinkedList<>();
        // Set<Integer> set2=new HashSet<>();
        for(int i=0;i<nums2.length;i++){
            if(map.containsKey(nums2[i])){
                result.add(nums2[i]);
                map.put(nums2[i],map.get(nums2[i])-1);
                if(map.get(nums2[i])==0){
                   map.remove(nums2[i]);
                }
            }

        }
        return   result.stream().mapToInt(Integer::intValue).toArray();

        // return result.toArray();
        
    }
}