class MyHashMap {
    LinkedList[] lists;
    int mod=7;
    

    public MyHashMap() {
        lists=new LinkedList[mod];
        for(int i=0;i<mod;i++){
            lists[i]=new LinkedList<Integer>();
        }
        
        
    }
    
    public void put(int key, int value) {
        int pos=key%mod;
        if(lists[pos].size()!=0){
            lists[pos].remove(0);
        }
        lists[pos].add((Integer)value);
        
    }
    
    public int get(int key) {
        int pos=key%mod;
        if(lists[pos].size()==0){
           return -1;
        }
        return (int)lists[pos].get(0);

        
    }
    
    public void remove(int key) {
         int pos=key%mod;
        if(lists[pos].size()!=0){
           lists[pos].remove(0);
        }
        
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap obj = new MyHashMap();
 * obj.put(key,value);
 * int param_2 = obj.get(key);
 * obj.remove(key);
 */