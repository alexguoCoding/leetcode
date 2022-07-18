class Solution {
    Map<Long,Double>map=new HashMap<>();
    public double helper(double x, long n) {
        if( map.containsKey(n)==true){

            return map.get(n);
        }

        if(n==0){
            return 1;
        }
        
       if(n%2!=0){
           double num=x*helper(x,n/2)*helper(x,n/2);
          

            map. put(n, num);
            return num;
            
        }
        double num=helper(x,n/2)*helper(x,n/2);
        map. put(n, num);
        return num;


        
    }


    public double myPow(double x, int n) {
        long N = n;
        return n>=0 ? helper(x,N) : 1/helper(x,N); 



        
    }
    
}