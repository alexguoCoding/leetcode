
var minAreaRect = function (points) {
    let map = new Map();
    for (let i = 0; i < points.length; i++) {
      if (!map.get(points[i][0])) {
        map.set(points[i][0],new Set());
       
      } 
      map.get(points[i][0]).add(points[i][1])
    }
    console.log(map)
    let l=points.length
    let area=Math.MAX_VALUE
    for(let i=0;i<l;i++){
         for(let j=0;j<l;j++){
             if(points[i][0]!=points[j][0]&&points[i][1]!=points[j][1]){
               console.log("a")
                
                 if( map.get(points[i][0]).has(points[j][1])){
                     if( map.get(points[j][0]).has(points[i][1])){
                         area=Math.min(area,Math.abs(points[j][0]-points[i][0])*Math.abs(points[j][1]-points[i][1]))
  
                     }
                 
  
                 }
             }
         }
    }
    return area
  };
  minAreaRect([[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]])()