/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  let set = new Set();

  let resultstr = "";
  for (let w of wordDict) {
    set.add(w);
  }
  let result = [];
  let dfs = function (start) {
    if (start == s.length) {
      result.push(resultstr);
      return;
    }
    for (let i = start + 1; i <= s.length; i++) {
      if (set.has(s.substring(start, i))) {
        let templ = resultstr.length;
        if (templ == 0) {
          resultstr = s.substring(start, i);
        } else {
          resultstr = resultstr + " " + s.substring(start, i);
        }

        // console.log(s.substring(start,i))
        dfs(i);
        resultstr = resultstr.substring(0, templ);
      } else {
        continue;
      }
    }
    return;
  };
  dfs(0);

  return result;
};