class Solution {
    public boolean isAnagram(String s, String t) {
        char[] ch1=s.toCharArray();
        char[] ch2=t.toCharArray();
        if(ch1.length!=ch2.length){
            return false;
            
        }
        int[] save=new int[26];
        for(int i=0;i<ch1.length;i++){
            save[ch1[i]-'a']++;
            save[ch2[i]-'a']--;
            
        }
        for(int i=0;i<save.length;i++){
             if(save[i]!=0){
                return false;
             }
            // System.out.println(save[i]);
            
        }
        return true;
        
        
    }
}