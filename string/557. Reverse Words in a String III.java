class Solution {
    char[] c;
    public String reverseWords(String s) {
         c=s.toCharArray();
        int start=0;
        int end=0;
            
        for(int i=0;i<s.length();i++){
            
            if(c[i]==' '){
                reverse( start, i-1) ;
                start=i+1;
                //System.out.println("s");
                
            }
            else if(i==s.length()-1){
                reverse( start, i) ;

                
            }
        
            
            
        }
        return new String(c); 
        
    }
    public void reverse(int start,int end) {
        for(int i=start,j=end;i<j;i++,j--){
            char temp=c[i];
            c[i]=c[j];
            c[j]=temp;
            
        }
        
    }
}