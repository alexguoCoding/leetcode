class Solution {
    public boolean wordPattern(String pattern, String s) {
        String[] s1=s.trim().split(" ");
        char[] ch1=pattern.toCharArray();
        Map<Character,String> map1=new HashMap<>();
         Map<String,Character> map2=new HashMap<>();
        if(s1.length!=ch1.length){
            return false;
        }
        for(int i=0;i<ch1.length;i++){
            if(!map1.containsKey(ch1[i])){
                map1.put(ch1[i],s1[i]);
                
            }
            else{
                if(!(map1.get(ch1[i]).equals(s1[i]))){
                    return false;
                    
                }
            }
        }
        for(int i=0;i<ch1.length;i++){
            if(!map2.containsKey(s1[i])){
                map2.put(s1[i],ch1[i]);
                
            }
            else{
                if(!(map2.get(s1[i])==(ch1[i]))){
                    return false;
                    
                }
            }
            
        }
        return true;
    }
}