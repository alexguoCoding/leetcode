class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        int row=matrix.length;
        int coloum=matrix[0].length;
        int [][] visited=new int[row][coloum];

         List<Integer> result= new ArrayList<>();
        int i=0,j=0;
        while(result.size()<row*coloum){
            while(j<coloum&& visited[i][j]==0){
                     result.add(matrix[i][j]);
                     visited[i][j]=1;
                // System.out.println(matrix[i][j]);
                j++;
                
            }
            j--;
            i++;
       // System.out.println(matrix[i][j]);

            while(i<row&& visited[i][j]==0){
                     result.add(matrix[i][j]);
                     visited[i][j]=1;
                System.out.println(matrix[i][j]);
                i++;
                 // System.out.println(matrix[i][j]);
                
            }
            i--;
            j--;
        

            while(j>=0&& visited[i][j]==0){
              
                     result.add(matrix[i][j]);
                     visited[i][j]=1;
                // System.out.println(matrix[i][j]);
                     j--;
                
            }
            j++;
            i--;
         
            
            while(i>=0&&visited[i][j]==0){
              
                     result.add(matrix[i][j]);
                     visited[i][j]=1;
                // System.out.println(matrix[i][j]);
                     i--;
                
            }
            i++;
            j++;
 

        }


       
             
        
        return result;
        
        
    }
}