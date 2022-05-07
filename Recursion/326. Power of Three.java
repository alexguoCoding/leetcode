class Solution {
    public boolean isPowerOfThree(int n) {
        //System.out.println("n/3:"+6/3);

        if(n==1){
            return true;
        }
        if(n%3==1){
            return false;
        }
        if(n%3==2){
            return false;
        }
        if(n==0){
            return false;
        }
        
        return isPowerOfThree(n/3);

    }
}