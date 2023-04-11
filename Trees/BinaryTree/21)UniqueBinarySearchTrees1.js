// LEET CODE = 96


let result;
function numTrees(n) {
    result = []
    result[0] = 1
    result[1] = 1
    result[2] = 2
    f(n)
    return result[n]
};

function f(n){
  for(let i = 2; i <= n ;i++){
    let sum = 0

    for(let j = 1 ; j <= i ;j++){
      let left = result[j-1] // left
      let right = result[i-j] //right
      sum += left*right
    }
    
    result[i] = sum
  }
}