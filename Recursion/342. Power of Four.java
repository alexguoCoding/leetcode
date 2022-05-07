class Solution {
    public boolean isPowerOfFour(int n) {

        if(n==1){
            return true;
        }
        if(n%4==1){
            return false;
        }
        if(n%4==2){
            return false;
        }
        if(n%4==3){
            return false;
        }
        if(n==0){
            return false;
        }
        // System.out.println("n/2:"+n/2);
        
        return isPowerOfFour(n/4);
    }
}