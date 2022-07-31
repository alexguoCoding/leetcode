class Solution {
    List<List<String>> result=new ArrayList<>();
    List<String> path=new ArrayList<>();
    public List<List<String>> partition(String s) {
        helper(s,0);
        return result;
        
    }
    public void helper(String s,int startcut) {


        if(startcut==s.length()){       
	        result.add(new ArrayList<>(path));  
            return;    
        }
        else{
            for (int i=startcut+1;i<=s.length();i++){
                String str = s.substring(startcut,i);
                if(!check(str)){
                    continue;
                }
                path.add(str);
                helper(s, i);
                path.remove(path.size()-1);
            } 
        }
        
    }
    public boolean check(String s) {
        int start=0;
        int end=s.length()-1;
        for( int i=start,j=end; i<=j; i++,j--){

            
            if(s.charAt(i)!=s.charAt(j)){
                return false;
            }
            
        }
        

        return true;
        
    }
}