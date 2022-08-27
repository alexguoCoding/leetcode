class Solution {
    public boolean isPalindrome(String s) {
        char[] ch=s.toCharArray();
        int l1=ch.length;
        int right=l1-1;
        int left=0;
        while(left<right){
            while(left < right && Character.isLetterOrDigit(ch[left])!=true){
                ++left;

            }
            while(left < right && Character.isLetterOrDigit(ch[right])!=true){
                --right;
            }
            if(Character.toLowerCase(ch[left])!=Character.toLowerCase(ch[right])){
                return false;
            }
            ++left;
            --right;
        }
         return true;
        
    }
}