class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int left=0;

        int row=matrix.length;
        int coloumn=matrix[0].length;
        int right=row*coloumn-1;
        while(left<right){
            int mid=(left+right)/2;
            if(matrix[mid/coloumn][mid%coloumn]>target){
                right=mid;
                
            }
            else if(matrix[mid/coloumn][mid%coloumn]<target){
                left=mid+1;
            }
            else{
                return true;
            }
        }
        return matrix[left/coloumn][left%coloumn]==target?true:false;
        
    }
}