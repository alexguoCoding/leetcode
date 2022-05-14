/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

      public class Solution extends VersionControl {
        public int firstBadVersion(int n) {
                int l=1;
                int r=n;
    
            
            while(l<r){
    //             System.out.println("mid:"+mid);
    //             System.out.println("mid+1:"+(mid+1));
                            int mid=l+(r-l)/2;
                
                if(isBadVersion(mid)==false&&isBadVersion(mid+1)==false){
                    l=mid;
                }
                else if(isBadVersion(mid)==true&&isBadVersion(mid+1)==true){
                    r=mid;
                }
                else if(isBadVersion(mid)==false&&isBadVersion(mid+1)==true){
                    return mid+1;
                }
    
                
            }
            return l;
            
        }
    }