class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<List<Integer>> out= new ArrayList<List<Integer>>();
        for(int i=1;i<=rowIndex+1;i++){
           List<Integer> path= new ArrayList();
             for(int j=1;j<=i;j++){
                    if(j==1|j==i){
                        path.add(1);
                    }
                 else{
                     path.add(out.get(i-2).get(j-2)+out.get(i-2).get(j-1));
                     
                }

             }
             out.add(path);
            
            
        }
        return out.get(rowIndex);
    }
}