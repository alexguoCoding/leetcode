class Solution {
    public boolean isValidSudoku(char[][] board) {
      int height=9;
      int width=9;
     
      for(int i=0;i<height;i++){
         HashSet<Character> set=new HashSet<>();
         for(int j=0;j<width;j++){
           if(board[i][j]!='.'&&set.contains(board[i][j])){

             return false;
             
           }
           else{
             set.add(board[i][j]);
          }
           
         }
        
      }
      for(int i=0;i<width;i++){
         HashSet<Character> set=new HashSet<>();
         for(int j=0;j<height;j++){
           if(board[j][i]!='.'&set.contains(board[j][i])){

             return false;
           }
           else{
             set.add(board[j][i]);
          }
           
         }
        
      }
      int[] pos={0,3,6};
      for(int pHeight:pos){
        for(int pWidth:pos){
          HashSet<Character> set=new HashSet<>();
              for(int i=pHeight;i<pHeight+3;i++){
                 

                     for(int j=pWidth;j<pWidth+3;j++){
                       if(board[i][j]!='.'&set.contains(board[i][j])){
                                    System.out.println(board[i][j]);
                         return false;
                       }
                       else{
                         set.add(board[i][j]);
                      }

                  }                  
                }

        
          }
        
      }
      return true;


      
      
    }
}