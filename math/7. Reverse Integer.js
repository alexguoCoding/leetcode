/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {

    let s=x.toString().split("");
    if(1){
        //console.log(s[s.length-1]);
       // console.log(s[s.length-1]==='-');
    }
    let minus=false;
    if(s[0]==='-'){
        let sign=s.shift();
        minus=true;

    }
    s=s.reverse();
          if (parseInt(s.join("")) > 2147483647) {
              return 0;
          }
    if(minus==true){
        s.unshift('-');

    }
    
    s=s.join("");
    //console.log(s);



    

  //   if(s[0]=="-1"){
  //       console.log("sds");
  //   }
    return s;

};