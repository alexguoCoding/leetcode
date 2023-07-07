/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
  let bankset = new Set();
  let set = new Set();
  for (let i of bank) {
    bankset.add(i);

  }
  set.add(startGene)
  if(startGene===endGene){
      return 0
  }
  if(bank.length==0){
      return -1
  }
  if(!bankset.has(endGene)){
      return -1
  }
  let temp = [];
  startGene = startGene.split("");
  temp.push(startGene);
  let g = ["A", "C", "T", "G"];
  let result = 0;
  while (temp.length != 0) {
    result++;
    let times = temp.length;
    for (let i = 0; i < times; i++) {
      let newgene = temp.shift();
     console.log(newgene)

      for (let j = 0; j < newgene.length; j++) {
        for (let k = 0; k < g.length; k++) {
          let tempGene = [...newgene];

          tempGene[j] = g[k];

          let tempstr = tempGene.join("");
         // console.log(tempstr)


          if (bankset.has(tempstr)&&!set.has(tempstr)) {
                temp.push(tempGene);
                set.add(tempstr)
                // console.log(tempstr);
            }

          
          
          if (tempstr === endGene) {
            return result;
          }
        }
      }
    }
  }
  return -1;
};