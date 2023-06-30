/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
 const Node = function() {
    this.array=new Array(26).fill(null)
    this.end=false
    
    
};

var replaceWords = function(dictionary, sentence) {
    let mother=new Node();
    for(let d of dictionary){
        let tempmother=mother
        for (let c of d){
          let pos=c.charCodeAt()-'a'.charCodeAt()
          if(tempmother.array[pos]==null){
              tempmother.array[pos]=new Node()
              
          }
           tempmother=tempmother.array[pos]

        }
        tempmother.end=true
        tempmother.Str=d
        
    }
    let tempsentence=sentence.split(" ")
    let result=[]

   // console.log(tempsentence)

    for(let d of tempsentence){
        let tempmother=mother
        for (let i=0;i<d.length;i++){
         
           
          let pos=d[i].charCodeAt()-'a'.charCodeAt()
              //console.log(pos)
          if(tempmother.array[pos]==null){
              result.push(d)
              result.push(' ')

             break;
              
          }
          if( tempmother.array[pos].end==true){
              d=  tempmother.array[pos].Str
              result.push(d)
              result.push(' ')


             break;
              
          }
          if(i==d.length-1){
            result.push(d)
            result.push(' ')
               break;

          }
          
           tempmother=tempmother.array[pos]

        }
      
        
    }
    // for()

    result.pop();
    //  console.log(result)
     let final=""
     for(let i=0;i<result.length;i++){
final+=result[i]
     }
     return final
    
};