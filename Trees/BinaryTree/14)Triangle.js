let arr = [[2],[3,4],[6,5,7],[4,1,8,3]]
console.log(minimumTotal(arr))

function minimumTotal(arr){
    let sum = 0

for(let i = arr.length - 1 ; i > 0 ; i--){
let r = 0

for(let j = 0; j < arr[i-1].length ;j++){
  let max = Infinity

  for(let q = j ; q < 2+r ; q++){
    sum = arr[i-1][j] + arr[i][q]  
  max = Math.min(max , sum)
  }
  
arr[i-1][j] = max
  r++
}
  }
return arr[0][0]
}