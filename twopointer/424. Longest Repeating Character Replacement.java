class Solution {
    public int characterReplacement(String s, int k) {
        char[] ch=s.toCharArray();
        int l=ch.length;
        int left=0;
        int right=0;
        int di=0;
        int[] num = new int[26];
        Map<Character,Integer> map=new HashMap<>();
        char save;
        int maxSameC=0;
        int max=0;
        int[] counts = new int[26];
;
        while(right<l){
                counts[ch[right] - 'A']++;
                maxSameC=Math.max(counts[ch[right] - 'A'],maxSameC);


                 
 
    
            right++;
            while(right-left-maxSameC>k&&left<l){
                  counts[ch[left] - 'A']--;
                    maxSameC=0;
                for(int i=0;i<26;i++){
                    maxSameC=Math.max(counts[i],maxSameC);
                }
                    
              //   maxSameC=Math.max(map.get(ch[left]),maxSameC);
                left++;

            }
            


//             System.out.print("maxSameC； "+maxSameC);
//             System.out.print(" left "+left);
//             System.out.println(" right "+right);
            
            
            
           
           
            max=Math.max(max,right-left);


        }
        return max;
        
        
    }
}