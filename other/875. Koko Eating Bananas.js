/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  check = function (mid) {
    let hour = 0;
    for (let i of piles) {
      hour += Math.ceil(i / mid);
    }
    if (hour > h) {
      return false;
    }
    return true;
  };
  let maxpile = 0;
  for (let i of piles) {
    maxpile = Math.max(maxpile, i);
  }
  let l = 0;
  let r = maxpile + 1;
  while (l + 1 != r) {
    let mid = Math.floor((l + r) / 2);
    if (check(mid)) {
      r = mid;
    } else {
      l = mid;
    }
  }

  return r;
};
