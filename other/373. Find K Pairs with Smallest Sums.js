/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let ans = [], q = new MinPriorityQueue({ priority: ([i,j]) => nums1[i] + nums2[j]}), n = nums2.length 
    
    for(let i = 0; i <nums1.length; i++){
       
               q.enqueue([i,0])
                // console.log([i,j])
                // console.log(q.size())
        
    }
    let result=[]
  

    for(let u = 0; u < k && !q.isEmpty(); u++){

        let [i,j] = q.dequeue().element
           ans.push([nums1[i],nums2[j]])
        if(j+1<n){
            q.enqueue([i,j+1])

        }
  
      


      

    }
    return ans 
};
