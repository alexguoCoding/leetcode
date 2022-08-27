class Solution {
    public int romanToInt(String s) {
        Map<Character,Integer>map=new HashMap<>(){{
            put('M', 1000);
            put('D', 500);
            put('C', 100);
            put('L', 50);
            put('X', 10);
            put('V', 5);
            put('I', 1);
        }};
        char[] ch = s.toCharArray();
        int l1=ch.length;
         int temp=map.get(ch[0]);
        
        int sum=0;
        for(int i=0;i<l1;i++){
           if(map.get(ch[i])<=temp){
               sum+=map.get(ch[i]);


           }
            else{
                sum+=map.get(ch[i]);
                sum-=temp;
                sum-=temp;
            }
            temp=map.get(ch[i]);
            
            

        }
        return sum;
        
    }
}