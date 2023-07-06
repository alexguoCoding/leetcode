/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function (radius, x_center, y_center) {
  this.minx = x_center - radius;
  this.miny = y_center - radius;
  this.maxx = x_center + radius;
  this.maxy = y_center + radius;
  this.x_center=x_center
  this.y_center=y_center
   this.radius=radius
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function () {

  let randx ;
  let randy ;

  check=(x,y)=>{

    if(Math.pow(x-this.x_center,2)+Math.pow(y-this.y_center,2)<=Math.pow(this.radius,2)){
      
      return true
    }
    else{
      return false
    }

  }

  while (true) {
  randx = this.maxx-2*Math.random() * this.radius;
   randy = this.maxy-2*Math.random() * this.radius;
  console.log(randx)
    if (
      randx <= this.maxx &&
      randx >= this.minx &&
      randy <= this.maxy &&
      randy >= this.miny
        &&check(randx,randy)) {
        return [randx,randy]
    }
  }

};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
