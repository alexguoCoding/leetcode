/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
  properties=properties.sort((a,b)=>{
        if(a[0]!=b[0]){
            return b[0]-a[0]
        }
        else{
            return a[1]-b[1]
        }
    })
    //console.log(properties)
    let l=properties.length
    let count=0
let maxdef=0

    for(let i=0;i<l;i++){
                if(properties[i][1]<maxdef){
                   count++;
                 
  
            }
            else{
              maxdef=properties[i][1]
            }

    }

    return count
};