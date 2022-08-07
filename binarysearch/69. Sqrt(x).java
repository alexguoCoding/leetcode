class Solution {
    public int mySqrt(int x) {
        int l=0;

        if (x == 0) {
            return 0;
        }
        if (x == 1) {
            return 1;
        }
        int r = x / 2;
        int ans=-1;



        while(l<=r){
            int mid=(l+r)/2;
            if((long)mid*mid==x){

                return mid;

            }
            else if((long)mid*mid<x){
                 ans=mid;
                 l=mid+1;
            }
            else{
                  r=mid-1;
            }

                
        }
        return ans;
        
    }
}