class Solution {
    public int maxProfit(int[] prices) {
        int min=prices[0],max=prices[0],profit=0;
         for (int i = 0; i < prices.length; i++) { 
             if(min>prices[i]){
                 min=prices[i];
            }
             if(max<prices[i]){
                 max=prices[i];
            }
             if(max>prices[i]){
                 max=prices[i];
             }
                 

             if(profit<max-min){
                 profit=max-min;
            }
             
        }
        return profit;
       
    }

}