// LEET CODE = 1561 
let pile = [2,4,1,2,7,8]
console.log(maxCoins(pile))

function maxCoins(arr){
arr.sort(fn)
function fn(a,b){
    return a-b
}

let i = 0
let q = arr.length - 2
let j = arr.length - 1
let ans = 0 

while(i < q ){
    ans = ans + arr[q]
    i++
    j-=2
    q-=2
}
return ans
}