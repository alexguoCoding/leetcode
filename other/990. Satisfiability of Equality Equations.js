/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    let l=equations.length
    let uf=new UnionFind(l)
    for(let i=0;i<l;i++){
        let A=equations[i][0].charCodeAt()-'a'.charCodeAt()
        let B=equations[i][3].charCodeAt()-'a'.charCodeAt()
        let sign=equations[i][1]
        //console.log(A,B,sign)
        if(sign=="="){
           uf.union(A,B)
                
            

        }


    }
    for(let i=0;i<l;i++){
        let A=equations[i][0].charCodeAt()-'a'.charCodeAt()
        let B=equations[i][3].charCodeAt()-'a'.charCodeAt()
        let sign=equations[i][1]
        if(sign=="!"){
            if(uf.check(A,B)){
                 return false
            }

        }

    }
    return true
    
};
class UnionFind{
    constructor(l){
        this.Parent=new Array(l)
        for(let i=0;i<26;i++){
            this.Parent[i]=i
        }
    }
    find(a){
        if(this.Parent[a]!=a){
            this.Parent[a]= this.find(this.Parent[a])
        }
        return this.Parent[a]

    }
    check(a,b){
     
        let a1=this.find(a)
        let b1=this.find(b)
        if(a1!=b1){
            return false
        }
        return true

    }
    union(a,b){
        let a1=this.find(a)
        let b1=this.find(b)
        if(a1!=b1){
            this.Parent[a1]=b1
        }
      

    }


}