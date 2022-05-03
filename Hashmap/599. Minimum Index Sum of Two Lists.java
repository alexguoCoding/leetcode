class Solution {
    public String[] findRestaurant(String[] list1, String[] list2) {
        Map<String,Integer>map1=new HashMap<>();
        Set<String> set = new HashSet<>();
         for (int i = 0; i < list1.length; i++) { 
             map1.put(list1[i],i);
        }
        int finalsum=2000;


           for (int i = 0; i < list2.length; i++) {
                int currentsum=0;
                 if( map1.containsKey(list2[i])){
                     currentsum=i+ map1.get(list2[i]);
                        if(finalsum>currentsum){
                            set.clear();
                            set.add(list2[i]);
                             finalsum=currentsum;  
                        }
                        else if(finalsum==currentsum){
                            set.add(list2[i]);
                        }

                 }
        
            }
            String[] result = set.toArray(new String[set.size()]);
        return result;
    }
}