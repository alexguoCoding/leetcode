class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        Map<String,Integer> map=new HashMap<>();
        for(int i=0;i<words.length;i++){
            if(!map.containsKey(words[i])){
                map.put(words[i],1);
            }
            else{
                map.put(words[i],map.get(words[i])+1);
            }
        }
        PriorityQueue<String> minheap=new PriorityQueue<>((a,b)->{
            if(map.get(a).equals(map.get(b))){
                return b.compareTo(a);
                
            }
            else{
                return map.get(a)-map.get(b);
            }
        });
        for(Map.Entry<String,Integer> temp:map.entrySet()){
            minheap.add(temp.getKey());
            if(minheap.size()>k){
                
                minheap.remove();
            }
        }
        List<String> result=new ArrayList<>();
        List<String> resultnow=new ArrayList<>();
        int i=0;
        while(minheap.size()!=0){
            result.add(minheap.poll());
        }
        for(int j=result.size()-1;j>=0;j--){
            resultnow.add(result.get(j));
            
        }

        return resultnow;
    }
}