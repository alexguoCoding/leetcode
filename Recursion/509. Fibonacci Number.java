class Solution {

    Map<Integer,Integer>map=new HashMap<>();
        public int fib(int n) {
             
         if( map.containsKey(n)){
             return map.get(n);
        }
          if(n==1|n==0){
              return n;
            }
           
         int result= fib(n-1)+fib(n-2);
             map.put( n,result);
            return result;
            
    
        }
    }