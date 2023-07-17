/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if(rowsCount*colsCount!=this.length){
        return []
    }
    let arr=new Array(rowsCount).fill(0).map(()=>new Array(colsCount))
    let flag=1
    for(let i=0;i<this.length;i++){
        let row=i%rowsCount
        let col=Math.floor(i/rowsCount)
        if(flag==1){
             arr[row][col]=this[i]

        }
        else{
            arr[rowsCount-row-1][col]=this[i]

        }
        if(row==rowsCount-1){
            
             flag*=-1

        }
       
       
    }
    let result=[]
    for(let i=0;i<arr.length;i++){
result.push(arr[i])
    }
    //console.log(arr)
    return result

}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */