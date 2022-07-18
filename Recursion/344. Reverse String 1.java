class Solution {
    public void reverseString(char[] s) {
        int l=0;
        int r=s.length-1;
        
        helper(l,r,s);
        
    }
  public void helper(int l,int r, char[] s) {
     if(l>=r){
         return;
    }
      char temp;
      temp=s[l];
      s[l]=s[r];
      s[r]=temp;
      l++;
      r--;
      helper(l,r,s);

      
        
    }

}