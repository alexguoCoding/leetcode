class Solution {
    public int[][] highFive(int[][] items) {
        PriorityQueue<Integer> num=new PriorityQueue<>((a,b)->(a-b));
        LinkedList<Integer> list=new LinkedList<>();
       Map<Integer,PriorityQueue> map=new HashMap<>();
        for(int i=0;i<items.length;i++){
             PriorityQueue<Integer> temp=new PriorityQueue<>((a,b)->(a-b));
               int first=items[i][0];
               int second=items[i][1];
              if(!map.containsKey(first)){
                 
                  temp.add(second);
                  map.put(first,temp);
              }
            else{
                temp=map.get(first);
                temp.add(second);
                if(temp.size()>5){
                    temp.remove();
                }
            }       
        }
        int size=map.size();
        int[][] result=new int[size][2];
        int i=0;
        for( Map.Entry<Integer,PriorityQueue> element:map.entrySet()){
             PriorityQueue<Integer> temp=new PriorityQueue<>((a,b)->(a-b));
             result[i][0]=element.getKey();
            temp=element.getValue();
            int avg=0;
            while(temp.size()!=0){
                avg+=temp.poll();
            }
            avg=avg/5;
            result[i][1]=avg;
            i++;
        }
        return result;

    }
}