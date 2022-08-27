class Solution {
    public int lengthOfLongestSubstringKDistinct(String s, int k) {
       char[] ch=s.toCharArray();
       int l=ch.length-1;
        int left=0;
        int right=0;
        int sum=0;
        Map<Character,Integer> map= new HashMap<>();
        if(k==0){
            return 0;
        }
        while(right<=l){
            while(left<=l&&map.size()>k){
                if(left==map.get(ch[left])){
                    map.remove(ch[left]);
                }
                
                left++;
                
            }
            while(right<=l&&map.size()<=k){

                map.put(ch[right],right);
                if(map.size()>k){
                    break;
                }
                right++;

                
            }
            sum=Math.max(sum,right-left);
        }
        return sum;
        
    }
}