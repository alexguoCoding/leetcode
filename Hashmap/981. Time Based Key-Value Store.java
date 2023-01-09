class TimeMap {
    class vector{
        int time;
        String value;
        vector(int time,String value){
            this.time=time;
            this.value=value;
        }
    }
    HashMap<String,List<vector>> map=new HashMap<>();

    public TimeMap() {
        
    }
    
    public void set(String key, String value, int timestamp) {
        List<vector> savelist=map.getOrDefault(key,new ArrayList<>());
       
        vector temp=new vector(timestamp,value);
        savelist.add(0,temp);
        map.put(key,savelist);
        
    }
    
    public String get(String key, int timestamp) {
       List<vector> savelist= map.get(key);
        if(savelist==null){
            return "";
        }
        for(int i=0;i<savelist.size();i++){
            if(savelist.get(i).time<=timestamp){
                return savelist.get(i).value;
            }
            
        }
        return "";
        
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * TimeMap obj = new TimeMap();
 * obj.set(key,value,timestamp);
 * String param_2 = obj.get(key,timestamp);
 */