/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let l=-1
    let r=citations.length
    let len=citations.length
    let mid
    while(l+1!=r){
        
        mid=Math.floor((r+l)/2)
        if(len-mid==citations[mid]){
            return len-mid
        }
        if(len-mid>citations[mid]){
            l=mid
        }
        else{
            r=mid

        }
        console.log([l,r])
    }
   

    // if(r==len){
    //     return 0
    // }

    return len-r
    
};