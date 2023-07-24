/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
    let result = [];
    let MaxQueue = new PriorityQueue({
      compare: (a, b) => {
        return b - a;
      },
    });
  
    for (let i of arr) {
      MaxQueue.enqueue(i);
    }
    let temparr = [...arr];
    let getpos = function (temparr, temp) {
      for (let i = 0; i < temparr.length; i++) {
        if (temparr[i] == temp) {
          return i;
        }
      }
    };
    let reverse = function (arr, maxpos) {
      let l = 0,
        r = maxpos;
      while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++
        r--
      }
    };
  
    while (MaxQueue.size() != 0) {
      let maxnum = MaxQueue.dequeue();
      let maxpos = getpos(temparr, maxnum);
      if (maxpos + 1 == temparr.length) {
        temparr.pop();
        continue;
      } else if (maxpos == 0) {
        result.push(temparr.length);
        reverse(temparr, temparr.length - 1);
        temparr.pop();
      } else {
        result.push(maxpos + 1);
        reverse(temparr, maxpos);
        result.push(temparr.length);
        reverse(temparr, temparr.length - 1);
        temparr.pop();
      }
    }
    return result
  };
  