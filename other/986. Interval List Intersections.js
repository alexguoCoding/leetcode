/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
    let result = [];
    let l1 = 0,
      l2 = 0;
  
    while (l1 < firstList.length && l2 < secondList.length) {
      if (firstList[l1][1] < secondList[l2][0]) {
        l1++;
      } else if (firstList[l1][0] > secondList[l2][1]) {
        l2++;
      } else{
          let lmax=Math.max(firstList[l1][0], secondList[l2][0])
          let rmin=Math.min(firstList[l1][1], secondList[l2][1])
          result.push([lmax,rmin])
          if(firstList[l1][1]<secondList[l2][1]){
              l1++;
          }
          else{
            l2++;
          }
  
      }
    }
    return result;
  };
  