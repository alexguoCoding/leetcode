class Solution {
    public boolean isNStraightHand(int[] hand, int groupSize) {
        TreeMap<Integer,Integer> sortedmap=new TreeMap<>();
        for(int i=0;i<hand.length;i++){
            sortedmap.put(hand[i],sortedmap.getOrDefault(hand[i],0)+1);
        }
        if(hand.length%groupSize!=0){
            return false;
        }
        while(sortedmap.size()!=0){
             int key=-1;
            for(int j=0;j<groupSize;j++){
                if(key==-1){
                 key=sortedmap.firstKey();
                }
                if(!sortedmap.containsKey(key)){
                    return false;
                }
              
                
                if(sortedmap.get(key)==1){
                    sortedmap.remove(key);
                }
                   else{
                       sortedmap.put(key,sortedmap.get(key)-1); 
                 }
                
                 key=key+1;
            }
        }
        return true;
        
    }
}