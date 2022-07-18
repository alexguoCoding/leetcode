class Solution {
    
    Map<Integer,Integer>map=new HashMap<>();
        public int climbStairs(int n) {
            // map.put(1,1);
            // map.put(2,2);
            if(map.containsKey(n)){
                return map.get(n);
            }
            if(n==1||n==2){
                map.put(n,n);
                return n;
            }
    
            int num=climbStairs(n-1)+climbStairs(n-2);
            map.put(n,num);
            return num;
            
        }
    }