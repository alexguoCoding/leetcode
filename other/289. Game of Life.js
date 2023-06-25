/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let copy=new Array(board.length).fill(-1).map(()=>new Array(board[0].length).fill(-1));
    //console.log(copy)
    let dir=[[1,1],[-1,-1],[1,-1],[-1,1],[1,0],[-1,0],[0,1],[0,-1]]
    for(let i=0;i<board.length;i++){
         for(let j=0;j<board[0].length;j++){
             copy[i][j]=board[i][j]
             
         }
    }
   // console.log(copy)
    for(let posy=0;posy<board.length;posy++){
        for(let posx=0;posx<board[0].length;posx++){
            let liveNeibor=0
            for(let i=0;i<8;i++){
                
                    let newy=dir[i][0]+posy
                    let newx=dir[i][1]+posx
                    if(newy<board.length&&newx<board[0].length&&newy>=0&&newx>=0){
                        liveNeibor+=copy[newy][newx]

                    }
               
            }
           // console.log(posy+" "+posx+" "+liveNeibor)
            if(copy[posy][posx]==1){
                if(liveNeibor==2||liveNeibor==3){
                     board[posy][posx]=1
                }
                else{
                     board[posy][posx]=0
                }
            }
            if(copy[posy][posx]==0){
                if(liveNeibor==3){
                     board[posy][posx]=1
                }

            }
        }
    }

    
};