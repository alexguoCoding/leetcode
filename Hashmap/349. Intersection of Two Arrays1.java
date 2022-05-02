class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {

         Set<Integer> set = new HashSet<>();
        Set<Integer> resultvector = new HashSet<>();
         for (int i = 0; i < nums1.length; i++) {
              set.add(nums1[i]);
        }
            int resultindex=0;
         for (int i = 0; i < nums2.length; i++) {
              if( set.contains(nums2[i])){
                  resultvector.add(nums2[i]);

                  
            }
        }
        
        int[] result = new int[resultvector.size()];
        int k = 0;
        for (Integer num : resultvector) {
            result[k++] = num;
        }

        return result;
    
    }
}