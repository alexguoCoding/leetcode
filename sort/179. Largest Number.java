class Solution {
    public String largestNumber(int[] nums) {
        int l=nums.length;
        String[] ss=new String[l];
        for(int i=0;i<l;i++){
            ss[i]= Integer.toString(nums[i]) ;
        }
        Arrays.sort(ss,(a,b)->{
            String ab=a+b;
            String ba=b+a;
            return ba.compareTo(ab);


        });
        StringBuilder result=new StringBuilder();
        
        for(int i=0;i<l;i++){
          result.append(ss[i]);
        }
       
        while(result.length()>1&&result.charAt(0)=='0'){
         result.deleteCharAt(0);
        }
         String res=result.toString();

        return res;

        
        
    }
}