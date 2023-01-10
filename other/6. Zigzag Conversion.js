/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  
    if(s.length<=numRows||numRows==1){
        return s;

    }
     s=s.split("");

   let save=new Array(numRows).fill(0).map(()=>new Array(s.length).fill(0))
   console.log(save)
   let x=0;
   let y=0;
   let dir=1;
   
   for(e of s){
       save[y][x]=e
       console.log(e)
       if(dir==1){
          y++;
          if(y==numRows-1){
              dir=-1;

          }
       }
       else{
           y--;
           x++;      
           if(y==0){          
               dir=1;
           }

       }
      



   }
   let result="";
   for(let i of save){
       for(let j of i){
           if(j!=0){
               result+=j;
           }
       }
   }

   return result;
    
};