class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int row=matrix.length;
        int coloumn=matrix[0].length;
//         if(matrix==){
            
//         })
        for(int i=0;i<coloumn;i++){
            // if(target>=matrix[0][i]&& target<=matrix[row-1][i]){
                int left=0;
                int right=row-1;
                while(left<right){
                    int mid=(left+right)/2;
                    if(matrix[mid][i]>target){
                        right=mid;
                    }
                    else if(matrix[mid][i]<target){
                         left=mid+1;
                    }
                    else{
                        return true;
                    }
                    
                    
                }
               if (matrix[left][i] == target) return true;
                
                
            // }
                
            
        }
        return false;
        
        
        
        
    }
}