class Solution {
    char[] c;
    public String reverseStr(String s, int k) {
         c=s.toCharArray();
        int max=s.length();
        for(int i=0;i<max;i+=2*k){
            if(i+k>=max){
                reverse( i, max-1 );
            }
            else{
                reverse( i,  i+k-1);
            }

            
        }
        return new String(c);
        
    }
    public void reverse(int start, int end){
        for(int i=start,j=end;i<j;i++,j--){
            char temp=c[i];
            c[i]=c[j];
            c[j]=temp;
            
            
        }
    }
}