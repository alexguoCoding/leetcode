/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  let s = n.toString();
  arr = s.split("");
 
    l=arr.length
    let leftsmall=0
     let leftbig=0
     if(l==1){
         return -1
     }

    for(let i=l-1;i>0;i--){
        if(arr[i]>arr[i-1]){
            // console.log(arr[i]>arr[i-1])
            leftsmall=i-1
            break;
        }
        if(i==1){
            return -1

            
        }
    }
    //console.log(leftsmall)
    for(let i=l-1;i>0;i--){
        if(arr[leftsmall]<arr[i]){
            leftbig=i
            break
        }
    }
    
    
    let temp=arr[leftsmall]
     arr[leftsmall]=arr[leftbig]
     arr[leftbig]=temp
      left=leftsmall+1
      right=l-1
     while(left<right){
    let temp=arr[left]
     arr[left++]=arr[right]
     arr[right--]=temp

     }
     let result=parseInt(arr.join(""))

        if (result > 2147483647) {
          result = -1;
        }
    
     return result


  return letfinal;
};
