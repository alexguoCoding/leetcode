/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let arr=[]
    let i=0
    arr.push(0)
    arr.push(1)
    while(true){
        yield arr[i]
        i++
        if(i>=1){
            arr.push(arr[i]+arr[i-1])
        }
    }
    
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */