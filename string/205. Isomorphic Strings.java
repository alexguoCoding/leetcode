class Solution {
    public boolean isIsomorphic(String s, String t) {
        Map<Character,Character> map1=new HashMap<>();
       Map<Character,Character> map2=new HashMap<>();
        char[] ch1=s.toCharArray();
        char[] ch2=t.toCharArray();
        for(int i=0;i<ch1.length;i++){
            if(map1.containsKey(ch1[i])){
                if(map1.get(ch1[i])!=ch2[i]){
                    return false;
                }
                
            }
            else{
                 map1.put(ch1[i],ch2[i]);
            }
         
        }
        for(int i=0;i<ch1.length;i++){
            if(map2.containsKey(ch2[i])){
                if(map2.get(ch2[i])!=ch1[i]){
                    return false;
                }
                
            }
            else{
                 map2.put(ch2[i],ch1[i]);
            }
         
        }
        return true;
    }
}