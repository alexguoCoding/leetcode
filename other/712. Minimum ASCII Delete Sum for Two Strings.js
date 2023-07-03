/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    // console.log('s'.charCodeAt())
   
    let l1=s1.length
    let l2=s2.length
     let dp=new Array(l1).fill(-1).map(()=>new Array(l2).fill(-1))
     
    const cal=function(str){
        let sum=0;
        
        for(let c of str){
            sum+=c.charCodeAt()

        }
        return sum
    }
    const bfs=function(m,n){
        if(m==-1){
            return cal(s2.substring(0,n+1))
            
        }
        if(n==-1){
            // console.log(s1.substring(0,m+1))
              return cal(s1.substring(0,m+1))

        }
        if(s1[m]==s2[n]&& dp[m][n]==-1){
           
            dp[m][n]= bfs(m-1,n-1)

        }
        else if(s1[m]!=s2[n]&& dp[m][n]==-1){
            
             dp[m][n]= Math.min(bfs(m-1,n)+s1[m].charCodeAt(),bfs(m,n-1)+s2[n].charCodeAt())
        }
        return dp[m][n]
      
       

    }
    

    return  bfs(l1-1,l2-1)
    
};