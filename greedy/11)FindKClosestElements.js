// LEET CODE = 658
let arr = [1,1,1,1,10,10,10]
let k = 1
let x = 9
console.log(findClosestElements(arr,k,x))

function findClosestElements(arr,k,x){
let total = []
for(let i = 0 ; i < arr.length ;i++){
  let a = Array(2).fill(0)
total.push(a)
  total[i][0] = arr[i]
  total[i][1] = Math.abs(arr[i]-x)
}

total.sort(fn1)
function fn1(x,y){
  return x[1] - y[1]
}

let final = []
for(let i = 0 ; i < k ;i++){
  final.push(total[i][0])
}

final.sort(fn)
function fn(x,y){
  return x-y
}
return final
};