class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character,Integer> map=new HashMap<>();
        char[] ch= s.toCharArray();
        int left=0;
        int right=0;
        int l=ch.length-1;
        int max=0;
        

       while(left<=l&&right<=l){
            while(left<=l&&map.containsKey(ch[right])){

                map.remove(ch[left]);
                 left++;
            }

                
            while(right<=l&&!map.containsKey(ch[right])){
                
                map.put(ch[right],right);
                right++;
                
            }

            // left++;
            max=Math.max(max,right-left); 
           //  System.out.print("left"+left);
           // System.out.println("right"+right);
            // left++;

        }
        return max;
        
    }
}