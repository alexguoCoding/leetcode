class Solution {
    Map<Integer,Integer>map=new HashMap<>();
public int numTrees(int n) {
    if(map.containsKey(n)){
        return map.get(n);
    }

    if(n==0||n==1){
        return 1;
    }
    int sum=0;
    for(int i=1;i<n+1;i++){
        int left=numTrees(i-1);
        int right=numTrees(n-i);
        sum=sum+left*right;

    }
    map.put(n,sum);
    return sum;
    
}
}