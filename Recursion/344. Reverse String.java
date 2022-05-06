class Solution {
    public void swap(char[] s,int left,int right){ 
             if(left>=right){
                 return;
            }
             else{
                 char temp=s[left];
                 s[left]=s[right];
                 s[right]=temp;
                 swap( s,left+1,right-1);
                 
            }
    }
    public void reverseString(char[] s) {        
        swap( s,0,s.length-1);   
    }

}