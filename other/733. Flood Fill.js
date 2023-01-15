/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    if(image[sr][sc]==color){
        return image;

    }
    let colL=image[0].length;
    let rowL=image.length;


    let dir=[[0,1],[0,-1],[1,0],[-1,0]];
    let visit=new Array(image.length).fill(-1).map(()=>new Array(image[0].length).fill(-1))
    let helper= function(row,col){
        //console.log(row)
        if(visit[row][col]==1){
            return;
        }
        // if(image[row][col]!=color){
        //     visit[row][col]=1
 

        // }
       // image[row][col]=color
        visit[row][col]=1
        if(image[sr][sc]!=color){
            for(let d of dir){
                if(row+d[0]>=rowL||col+d[1]>=colL||row+d[0]<0||col+d[1]<0){
                    continue;

                }
                if(image[row][col]==image[row+d[0]][col+d[1]]){
                     helper(row+d[0],col+d[1])

                }
               
               

        
               
            }
            image[row][col]=color
        }
    
    }
    // for(let i=0;i<rowl;i+=){
    //     for(let i=0;i<rowl;i+=){

    //     }
    // }
    helper(sr, sc)
    //console.log(visit)
    return image;
    
};