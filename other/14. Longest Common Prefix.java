class Solution {
    public String longestCommonPrefix(String[] strs) {
      int i=0;
      String sub="";
      if(strs[0].equals("")){
        return sub;
      }
       // string presub=cur.substring(0,i)
      while(i<=(strs[0].length())){
        sub=strs[0].substring(0,i);
        for(String cur: strs){
          if(cur.length()<i||!sub.equals(cur.substring(0,i))){
             return sub.substring(0,i-1);
          }
        }
        i++;
      }
        

         return sub;
    }
 
}