class Solution {
    public int maxArea(int[] height) {
       int i=0,j=height.length-1;
        int max=0,area=0;
        while(i<j){
            area=Math.min(height[i],height[j])*(j-i);
            max=Math.max(max,area);

            if(height[i]>height[j]){
                    j--;
            }
            else{
                i++;
            }
            
        }
        return max;
    }
}