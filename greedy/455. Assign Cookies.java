class Solution {
    public int findContentChildren(int[] g, int[] s) {
        int childrenUsed=0;
        int cookieUsed=0;
        int content=0;
        Arrays.sort(g);
        Arrays.sort(s);

    while(childrenUsed<g.length&&cookieUsed<s.length){
        if(g[childrenUsed]<=s[cookieUsed]){
            childrenUsed++;
            cookieUsed++;
            content++;
        }
        else{           

            cookieUsed++;            
        }

        


    }
    return content;
}
}