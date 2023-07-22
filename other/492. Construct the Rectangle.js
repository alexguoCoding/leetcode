/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let rec=Math.floor(Math.sqrt(area))
    while(area%rec!=0){
        rec--

    }
    return [area/rec,rec]
    
};