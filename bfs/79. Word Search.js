/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 let dir=[[0,1],[1,0],[0,-1],[-1,0]]
 let result;
 let array;
var exist = function(board, word) {
    result=false;
    let traget=[];
    array=new Array(board.length).fill(false).map(()=>new Array(board[0].length).fill(false))

    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            //console.log(board[i][j])
            
                 bf(board, word,0,i,j);

               



        }
    }



    return result;

};
var bf = function(board, word,num,y,x) {
    
    if(y<0||y>board.length-1||x<0||x>board[0].length-1||num==word.length){
        return;

    }

    //   console.log()
    //   process.stdout.write(board[y][x]+array[y][x]);
    if(board[y][x]==word[num]&&array[y][x]==false){
         //console.log(board[y][x])
        
       
       
        if(num==word.length-1){

            result=true;
            return;
        }
       

         for(let i=0;i<4;i++){
             array[y][x]=true;
             
             bf(board, word,num+1,y+dir[i][1],x+dir[i][0]);

             array[y][x]=false;
         }
         
           


    }
    else{
        //
        return ;
    }
}

 
