/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  s = s.split("");
  console.log(s);
  let stack = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    //console.log(s[i])
    if (!isNaN(s[i])) {
      stack.push(s[i]);
      //
    } else {
      if (s[i] == "[") {
        stack.push(s[i]);
        count++;
      } else if (s[i] == "]") {
        let tempstr = [];
        let tempnum = "";
       // console.log(stack);
        while (stack.length - 1 >= 0 && stack[stack.length - 1] != "[") {
          //console.log(stack)

          tempstr.unshift(stack.pop());
        }
        //console.log(tempstr)
        stack.pop();
       // console.log(stack);
        while (stack.length - 1 >= 0 && !isNaN(stack[stack.length - 1])) {
          tempnum = stack.pop() + tempnum;

        
         // console.log(tempnum)
        }
  tempnum = parseInt(tempnum);
          for (let i = 0; i < tempnum; i++) {
            let copy = [...tempstr];
            stack = stack.concat(copy);
         
        }
       // console.log(stack);
      } else {
        stack.push(s[i]);

        //console.log(stack)
      }
    }
  }
  return stack.join("");
};
