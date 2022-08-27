class Solution {
    public boolean isUgly(int n) {
        int [] num={2,3,5};
        double result=n;
        if(n==0){
            return false;
        }
        for(int i=0;i<3;i++){
            while(result%num[i]==0){
                result=result/num[i];
            }

        }
        return result==1?true:false;
        
    }
}