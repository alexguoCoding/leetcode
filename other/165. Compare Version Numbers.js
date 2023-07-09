/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1=version1.split(".")
     let v2=version2.split(".")
     //console.log(v1)
     let l1=0
     let l2=0
     while(l1<v1.length&&l2<v2.length){
         if(parseInt(v1[l1])>parseInt(v2[l2])){
             return 1
         }
         if(parseInt(v1[l1])<parseInt(v2[l2])){
             return -1
         }
         l1++
         l2++
     }

     while(l1<v1.length){
       
        if(parseInt(v1[l1])> 0){
             return 1
         }
        l1++
        // console.log(l1)

     }
     while(l2<v2.length){
        if(parseInt(v2[l2])> 0){
             return -1
         }
         l2++

     }
     return 0
    //  for(i=0;){

    //  }
    
};