/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let uf=new unionFind(n)
    for(let i=0;i<edges.length;i++){
        uf.union(edges[i][0],edges[i][1])
        console.log(i)
    }
    return uf.connect(source,destination)

   
    
};
class unionFind{
    constructor(n){
        this.parent=new Array(n).fill(0)
        for(let i=0;i<n;i++){
            this.parent[i]=i
        }
        
    }
    find(x){
     
        if(this.parent[x]!=x){
            this.parent[x]=this.find(this.parent[x])

        }
        return this.parent[x]


    }
    union(x,y){
        let X=this.find(x)
        let Y=this.find(y)
        if(X==Y){
            return
        }

        this.parent[X]=Y
        //console.log( this.parent)
    }
    connect(x,y){
        return this.find(x)==this.find(y)
    }

}