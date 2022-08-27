class Solution {
    public int[][] generateMatrix(int n) {
        int row=n;
         int coloum=n;
        int[][] visit=new int[n][n];
         int[][] result=new int[n][n];
        int put=1;
        int i=0,j=0;
        if(n==1){
           result[0][0]=1;
            return result;
        }
        while(put<=n*n){
            while(j<coloum&&visit[i][j]!=1){
                result[i][j]=put;
                put++;
                visit[i][j]=1;
                //System.out.println(result[i][j]);
                j++;
            }
            j--;
            i++;
            while(i<row&&visit[i][j]!=1){
                result[i][j]=put;
                put++;
                visit[i][j]=1;
               // System.out.println(result[i][j]);
                i++;
            }
            i--;
            j--;
            while(j>=0&&visit[i][j]!=1){
                result[i][j]=put;
                put++;
                visit[i][j]=1;
                //System.out.println(result[i][j]);
                j--;
            }
            j++;
            i--;
            while(j>=0&&visit[i][j]!=1){
                result[i][j]=put;
                put++;
                visit[i][j]=1;
               // System.out.println(result[i][j]);
                i--;
            }
            i++;
            j++;
        }
            
        return result;
    }
}