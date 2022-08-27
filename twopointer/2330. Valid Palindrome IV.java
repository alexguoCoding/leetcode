class Solution {
    boolean result=false;
    public boolean makePalindrome(String s) {
        char[] ch=s.toCharArray();
        int l1=ch.length-1;
        helper(ch,0,l1,0);
        
        return result;
    }
    void helper(char[] s,int l,int r,int times){
        
        if(l>=r){
            if(times<=2){
                result=true;
                    return;
            }
        }
        else{
            if(s[l]!=s[r]){
                helper(s,l+1,r-1,times+1);
                
               
            }
            else{
                helper(s,l+1,r-1,times);
                
               
            }
            
        }

        
    }
    
}