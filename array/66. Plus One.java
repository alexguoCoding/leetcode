class Solution {
    public int[] plusOne(int[] digits) {
        int right=digits.length;
         for (int i = right-1; i >=0; i--) { 
             if(digits[i]==9){
                 digits[i]=0;
            }
             else{
                 digits[i]=digits[i]+1;
                 return digits;
                }
            
        }
    digits = new int[right + 1];
    digits[0] = 1;
        return digits;
    }

}