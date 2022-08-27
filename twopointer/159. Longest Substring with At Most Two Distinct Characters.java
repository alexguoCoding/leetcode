class Solution {
    public int lengthOfLongestSubstringTwoDistinct(String s) {
        char[] ch=s.toCharArray();
        int l=ch.length-1;
        int left=0;
        int right=0;
        int max=1;
        Map<Character,Integer> map=new HashMap<>();
        while(right<=l){
            while(left<=l&&map.size()>2){
                if(left==map.get(ch[left])){
                    map.remove(ch[left]);
                }

                left++;
            }
            
            while(right<=l&&map.size()<=2){
                
                map.put(ch[right],right);

                if(map.size()==3||right>l){
            // System.out.println("left"+left);
            // System.out.println("right"+right);
            //  System.out.println("ch[right]"+ch[right]);
                    break;
                    
                }
             right++;

            }
            // right--;
            // System.out.println("left"+left);
            // System.out.println("right"+right);
            max=Math.max(max,right-left);
            
            
        }
        return max;
        
    }
}