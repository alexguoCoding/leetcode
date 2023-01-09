class Solution {
    public int lengthOfLastWord(String s) {
       String[] str = s.trim().split(" ");
        //stem.out.println(str[1]);
        System.out.println( str[str.length-1]);
        return str[str.length-1].length();

  
      
    }
}