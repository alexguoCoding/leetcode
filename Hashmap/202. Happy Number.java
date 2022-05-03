class Solution {
    public boolean isHappy(int n) {
        Set<Integer> set = new HashSet<>();
        int result=n;
        while(true){
            n=next(n);
            if(n==1){
                return true;
            }
            else{
                if(!set.add(n)){
                 return false;
                }
            
            }
        }


        
        
    }
    
    private int next(int m) {
        int nextnumber=0;

        while(m!=0){
        int d=m%10;
        nextnumber+=Math.pow(d, 2);
        m=m/10;
           // System.out.println(d);
        }
       
        
       
        return nextnumber;
    }
}