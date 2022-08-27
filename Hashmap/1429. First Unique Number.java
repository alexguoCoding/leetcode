class FirstUnique {
    Map<Integer,Boolean> map=new HashMap<>();
    LinkedList<Integer> list=new LinkedList<>();

    public FirstUnique(int[] nums) {
        
        for(int i=0;i<nums.length;i++){
            if(!map.containsKey(nums[i])){
                map.put(nums[i],false);
            }
            else{
                map.put(nums[i],true);
            }
            if((map.get(nums[i]))==true){
                
            }else{
                 list.add(nums[i]);
            }
            // list.add(nums[i]);
        }
        
    }
    
    public int showFirstUnique() {
        Iterator<Integer> interator= list.iterator();
        while(interator.hasNext()){
            int num=interator.next();

            if(map.get(num)==false){
                return num;
            }
            // else(map.get(num)==false){
            //     return num;
            // }

        }

       
        
    
        return -1;
    }
    
    public void add(int value) {
            if(!map.containsKey(value)){
                map.put(value,false);
            }
            else{
                map.put(value,true);
            }
            if((map.get(value))==true){
                
            }else{
                 list.add(value);
            }
        
        
        
    }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * FirstUnique obj = new FirstUnique(nums);
 * int param_1 = obj.showFirstUnique();
 * obj.add(value);
 */