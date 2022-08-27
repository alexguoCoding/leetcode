class Solution {
    int f;
    int target;
    boolean out=false;
    public boolean isValidPalindrome(String s, int k) {

        char[] ch=s.toCharArray();
        target=k;
        int l=0;
        int f=0;
        int r=ch.length-1;
        helper(ch,  l, r,0);
        
        return out;
        
        
    }
    void helper(char[] s, int l,int r,int change){
        
        if(change>target){
            return;
        }
        int min=0;
        if(l>=r){
             //System.out.println(change);
            if(change<=target){
                //System.out.println(out);
                out=true;
            }


            return;
        }
        else{
            if(s[l]!=s[r]){
    
                helper( s, l+1, r, change+1);
                helper(s, l, r-1,change+1);
   
            }
            else{
                helper( s, l+1, r-1,change);

            }


        }
        // System.out.println(min);
        return;

    }
}