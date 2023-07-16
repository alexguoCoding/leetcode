/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    let color = new Array(graph.length).fill(0);
  
    let result = true;
    dfs = function (n, m) {
      //  console.log(color)
      if (color[n] == 0) {
        color[n] = m;
        let arr = graph[n];
        if (arr.length == 0) {
          return;
        }
  
        for (let i = 0; i < arr.length; i++) {
          if (color[arr[i]] == m) {
            result = false;
          } else if (color[arr[i]] == m * -1) {
          } else {
            dfs(arr[i], m * -1);
          }
        }
      }
    };
    dfs(0, 1);
    console.log(color);
    for (let i = 0; i < graph.length; i++) {
      console.log(i);
      if (graph[i].length == 0) {
        continue;
      } else {
        dfs(i, 1);
      }
    }
    return result;
  };
  