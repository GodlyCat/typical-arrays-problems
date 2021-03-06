
exports.min = function min (array) {
  if(!array||!(array[0]!==undefined && array.every((item)=>typeof(item)==="number"))) return 0;
  else {
    let min = array[0]
    array.map((item)=>{
      min = min<item ? min : item
    })
    return min;
  }
}

exports.max = function max (array) {
  if(!array||!(array[0]!==undefined && array.every((item)=>typeof(item)==="number"))) return 0;
  else {
    let max = array[0]
    array.map((item)=>{
      max = max > item ? max : item
    })
    return max;
  }
}

exports.avg = function avg (array) { 
  if(!array||!(array[0]!==undefined && array.every((item)=>typeof(item)==="number"))) return 0
  else {
    let sum = 0
    array.map((item)=>{
      sum+=item
    })
    return sum/(array.length)
  }
}
