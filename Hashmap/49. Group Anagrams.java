class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map=new HashMap<>();
        for(int i=0;i<strs.length;i++){
            char[] ch=strs[i].toCharArray();

            Arrays.sort(ch);
            // System.out.println(key)
            String key = String.valueOf(ch);
            // System.out.println(key);
            if(map.containsKey(key)){
                List<String> AL=new ArrayList<>();
                AL=map.get(key);
                AL.add(strs[i]);
                map.put(key,AL);
            }
            else{
                List<String> AL=new ArrayList<>();
               
                AL.add(strs[i]);
                map.put(key,AL);
                
            }
            
            
        }
       List<List<String>> result=new ArrayList<>();
        // Iterator<Map.Entry<Integer, Integer>>
        Iterator<Map.Entry<String, List<String>>> iterator = map.entrySet().iterator();
        while(iterator.hasNext()){
           
          Map.Entry<String, List<String>> sub=iterator.next();
             // System.out.println(key);
            // List<String> sub;
            result.add(sub.getValue());
        }
        return result;
        
    }
}