/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  // let com=cpdomains[1].split(",")
  //console.log(cpdomains[0].split(" "));
  let map = new Map();
  for (let i = 0; i < cpdomains.length; i++) {
    let [times, temparr] = cpdomains[i].split(" ");
    times=parseInt(times)

    temparr = temparr.split(".");
    let tempstr = "";
    for (let i = temparr.length - 1; i >= 0; i--) {
        tempstr=temparr[i]+'.'+tempstr
      if (!map.has(tempstr)){
        map.set(tempstr, times);
      }
      else{
           map.set(tempstr, map.get(tempstr)+times);
      }
      //console.log(temparr[i]);
      
    }
  }
  let result=[]
  for(let [a,b]of map){
      //console.log([a,b])
   
      result.push(b+" "+a.slice(0,a.length-1))

  }
  return result
};
