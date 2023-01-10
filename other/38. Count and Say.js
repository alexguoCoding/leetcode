/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
        let map=new Map();
        let result=[1];
        let temp=[];
        

        if (n==1){
        return "1";
        }
        for(let i=2;i<=n;i++){
            temp=[];
             let save=result[0];
             let count=1;
            for(let j=1;j<result.length;j++){
              
                if(result[j]==save){
                    count++;

                }
                else{
                    temp.push(count);
                    temp.push(save);;
                    
                    save=result[j];
                    count=1;


                }
              


            }
            temp.push(count);
            temp.push(result[result.length-1]);;
            
            console.log(temp)
            result=[...temp];
            
           




        };
        temp=temp.join('')
        return  temp;
}