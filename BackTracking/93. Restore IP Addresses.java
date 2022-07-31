class Solution {
    List<String> result=new ArrayList<>();
    List<String> path=new ArrayList<>();
    
    public List<String> restoreIpAddresses(String s) {
        help( s, 0, 0);
        return result;
        
        
    }
    public void help(String s,int start,int times) {
        if(times==4){
            StringBuilder sb = new StringBuilder();
            for(int i=0;i<path.size()-1;i++){
                 
                sb.append(path.get(i)).append(".");
            }
            sb.append(path.get(path.size()-1));
            String finalstring=sb.toString();
            if(finalcheck(s,finalstring)){
                  result.add(finalstring);
            }

            

            
            
            
            return;
        }
        
        
        for(int i=start+1;i<=s.length();i++){
             String ips= s.substring(start,i);
            if(!checkvalid(ips)){
                continue;
            }
            path.add(ips);
            help(s,i,times+1);
            path.remove(path.size()-1);
            
            

        }
    }
    public boolean checkvalid(String s) {
        if(s.length()>1){
            if(s.charAt(0)=='0'){
                return false;
            }
            if(s.length()>3){
                return false;
            }

        }


        int num=Integer.parseInt(s);
        if(num>255){
            return false;

        }
       return true;
    }
    public boolean finalcheck(String s,String finalstring) {
        if(s.length()+3==finalstring.length()){
            return true;
        }

       return false;
    }
    