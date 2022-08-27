class Solution {
    public String removeDuplicates(String s) {

        char[] ch1=s.toCharArray();
        StringBuilder sb=new StringBuilder();

        for(int i=0;i<ch1.length;i++){
            if(sb.length()==0){
                 sb.append(ch1[i]);
            }
            else{
                if(sb.charAt(sb.length()-1)==ch1[i]){
                    sb.deleteCharAt(sb.length()-1);
                }
                else{
                    sb.append(ch1[i]);
                }
            }

            
        }
        return sb.toString();
        
        
    }
}