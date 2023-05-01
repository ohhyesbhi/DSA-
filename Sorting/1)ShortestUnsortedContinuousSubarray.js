// LEET CODE = 581
let nums = [2,6,4,8,10,9,15]
console.log(f(nums))

function f(arr){

if(arr.length == 1){
    return 0
}
let count = 0
for(let i = 1 ; i < arr.length ; i++){
    if(arr[i-1]<=arr[i]){
        continue
    }else{
        count++
    }
}
if(count==0){
    return 0
}
let min = Infinity
let max = -Infinity
for(let i = 0 ; i < arr.length ;i++){
if(i == 0){
    if(arr[i] >arr[i+1]){
        min = Math.min(min,arr[i])
        max = Math.max(max,arr[i])
    }
}
else if(i == arr.length-1){
    if(arr[i] < arr[i-1]){
        min = Math.min(min,arr[i])
        max = Math.max(max,arr[i])
    }
}
else if(arr[i] > arr[i+1] || arr[i] < arr[i-1]){
    min = Math.min(min,arr[i])
    max = Math.max(max,arr[i])
}
 }
// console.log(min,max)
let i = 0
while(i<arr.length && arr[i]<=min){
i++
}
let j = arr.length - 1
while(j>=0 && arr[j]>=max){
j--
}

return j-i+1
}