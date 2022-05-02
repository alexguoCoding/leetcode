class Solution {
    public boolean judgeSquareSum(int c) {
         for (int i = 0; i <=Math.sqrt(c); ++i) {
             double b=Math.sqrt(c-Math.pow(i, 2));
             if( Math.floor(b) == b){
                 return true;
                }
         
        }
      
            return false;

    }
}