/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    let minQueue=new MinPriorityQueue({priority:([i,j])=>arr[i]/arr[j]});
    let l=arr.length
    for(let i=0;i<l-1;i++){
    
            minQueue.enqueue([i,l-1])


    }
    let repeat=0;
    while(repeat<k-1){

        let [i,j]=minQueue.dequeue().element
        minQueue.enqueue([i,j-1])
        repeat++;
    }
    let [i,j]=minQueue.dequeue().element
    return [arr[i],arr[j]]

    
};