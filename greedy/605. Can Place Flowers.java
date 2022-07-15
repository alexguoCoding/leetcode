class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int insert=0,i=0;
         while(i<flowerbed.length) {
            if(flowerbed[i]==1){
                i=i+2;
            }
             else{

                if(i==flowerbed.length-1){
                     insert++;
                       break;
                }
                if(flowerbed[i+1]==0){
                        insert++;
                        i=i+2;
                }

                else{
                        i=i+3;
                }
          
                 
    
            }        
             
        }
        if(insert<n){
            return false;
        }
        else{
            return true;
        }
}
}