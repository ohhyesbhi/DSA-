// Given two arrays A and B of equal length n. Pair each element of array A to
//an element in array B, such that sum S of absolute difference of all pairs is minimum

let a = [4,1,8,7]
let b = [2,3,6,5]

console.log(MinDiff(a,b))

function MinDiff(a,b){

a.sort(fn)
function fn(x,y){
    return x-y
}
b.sort(fn)
let sum = 0
for(let i = 0 ; i < a.length ; i++){
let result = Math.abs(a[i] - b[i])
sum = sum + result
}
return sum
}