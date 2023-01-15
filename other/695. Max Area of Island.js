/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

    let colL=grid[0].length;
    let rowL=grid.length;
    let visit=new Array(rowL).fill(-1).map(()=>new Array(colL).fill(-1));
    let dir=[[1,0],[-1,0],[0,1],[0,-1]]
    let sum=0;
    let tempsum=0;
    // console.log(tempsum)
    let search=function(r,c){
            if(grid[r][c]==0||visit[r][c]==1){
                return;
            }
            visit[r][c]=1

            tempsum++;
             //console.log(tempsum)
            for(d of dir){
               // console.log(d)
                
                if(r+d[0]==rowL||r+d[0]==-1||c+d[1]==colL||c+d[1]==-1){
                    continue;
                }
                    //console.log(grid[r+d[0]][c+d[1]])
                if(grid[r+d[0]][c+d[1]]==1&& visit[r+d[0]][c+d[1]]==-1){
                     //console.log(tempsum)
                      //console.log(grid[r+d[0]][c+d[1]])
                    
                    search(r+d[0],c+d[1])


                }

            }
        


    }
    for(let j=0;j<rowL;j++){
        // console.log(j)
        for(let i=0;i<colL;i++){
            if(visit[j][i]==1){
               continue;
            }
            if(grid[j][i]==1){

                search(j,i)
            }
            sum=Math.max(tempsum,sum)
            tempsum=0;
            
            

        }

   
    }
    console.log(visit)
    
    return sum;

    
};