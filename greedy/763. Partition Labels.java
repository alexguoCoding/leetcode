class Solution {
    public List<Integer> partitionLabels(String S) {
        int[] last = new int[26];
        for (int i = 0; i < S.length(); ++i)
            last[S.charAt(i) - 'a'] = i;
        

        List<Integer> ans = new ArrayList();

        int end=last[S.charAt(0) - 'a'];
        int front=0;
       //ystem.out.println(end);
        
        for (int i = 0; i < S.length(); i++) {
          //  System.out.println(end);
            //System.out.println(i);
            if(i<=end){
                if(end<last[S.charAt(i) - 'a']){
                end=last[S.charAt(i) - 'a'];
                }
            }
           
            else{
                ans.add(end-front+1);
                end=last[S.charAt(i) - 'a'];
                front=i;
                // front=
            }

           
            
       
        }
        ans.add(end-front+1);
        return ans;
    }
}