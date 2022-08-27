class Solution {
     int temp=0;
    public boolean validPalindrome(String s) {
        char[] ch=s.toCharArray();
        int l1=ch.length;
        int right=l1-1;
        int left=0;

        while(left<right){

            if(ch[left]!=ch[right]){
               

                return check( ch ,  left+1, right)||check( ch ,  left, right-1);
            }
            else{
                ++left;
                --right; 
            }

        }
         return true;        
    }
    boolean check(char[] ch2 , int l, int r){
        for(int i=l,j=r;i<j;i++,j--){
            if(ch2[i]!=ch2[j]){
                return false;
            }
            
        }
        return true;


        
        
        
    }
    
}