/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, n) {
    let map = new Map();
     let count=0
     map.set(cells.join(""),0);
     // cells[0] = 0;
     // cells[7] = 0;
   
     let repeat=-1
     let j
     let startrepeat
     for (j = 1; j <= n; j++) {
       let temparr=new Array(8).fill(-1)
       temparr[0]=0
       temparr[7] = 0;
       for (let i = 1; i < temparr.length - 1; i++) {
         if ((cells[i - 1] == cells[i + 1])) {
           //  console.log(cells[i - 1],cells[i ],cells[i + 1])
           temparr[i] = 1;
         }
         else{
           temparr[i] = 0;
         }
         
       }
       cells=[...temparr]
        console.log(cells.join(""),j)
       if (map.has(cells.join(""))) {
         console.log(j,map.get(cells.join("")))
           repeat=j-map.get(cells.join(""))
           startrepeat=map.get(cells.join(""))
   
          break;
   
       } else {
           
         map.set(cells.join(""),++count);
       }
       if(j==n){
         return cells
   
       }
     }
     // return cells
     // if(repeat){
   
     // }
     n=(n-startrepeat)%repeat+startrepeat
     for(let [str,day] of map){
         //console.log( [str,day])
         if(day==n){
           return str.split("")
         }
     }
   };