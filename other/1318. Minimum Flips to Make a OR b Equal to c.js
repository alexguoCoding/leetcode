/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let count=0
    for(let i=0;i<31;i++){
        let bita=(a>>i)&1
        let bitb=(b>>i)&1
        let bitc=(c>>i)&1
        if(bitc==0){
            if(bita==1){
                count++;

            }
           if(bitb==1){
                count++;

            }

        }
        if(bitc==1){
            if(bita==1){
                continue

            }
           if(bitb==1){
                continue

            }
            count++

        }

    }
    return count
    
    
};