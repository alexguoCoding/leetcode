class TicTacToe {
    int[][] matrix;
    int size;

    public TicTacToe(int n) {
        matrix=new int[n][n];
        size=n;
    }
    
    public int move(int row, int col, int player) {
        matrix[row][col]=player;
        if(checkrow(player,row)||checkcoloum(player,col)||checkdig(player)|| checkantidig( player)){
            return player;
        }
        return 0;
        
    }
    private boolean checkrow(int player,int row) {
        for(int i=0;i<size;i++){
            if(matrix[row][i]!=player){
                return false;
            }
            
        }
        return true;
        
    }
    private boolean checkcoloum(int player,int col) {
        for(int i=0;i<size;i++){
            if(matrix[i][col]!=player){
                return false;
            }
            
        }
        return true;
        
    }
    private boolean checkdig(int player) {
        for(int i=0;i<size;i++){
            if(matrix[i][i]!=player){
                return false;
            }
            
        }
        return true;
        
    }
    private boolean checkantidig(int player) {
        for(int i=0;i<size;i++){
            if(matrix[i][size-i-1]!=player){
                return false;
            }
            
        }
        return true;
        
    }
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * TicTacToe obj = new TicTacToe(n);
 * int param_1 = obj.move(row,col,player);
 */