// LEET CODE = 904
let fruits = [1,2,3,2,2]
console.log(totalfruit(fruits))

function totalfruit(fruits){
if(fruits.length == 1){
    return 1
}
let freq = {}
let end = 0
let start = 0
let count = 0
let sum = 0
let max = 0
while(end < fruits.length){
let curr = fruits[end]
if(freq[curr]){
   freq[curr]++
} else{
   freq[curr] = 1
}
let keys = Object.keys(freq)

if(keys.length <= 2){
   max = Math.max(max,end-start+1)
}
if(keys.length > 2){         // [3,3,3,1,2,1,1,2,3,3,4]
if(freq[fruits[start]] > 0){
   freq[fruits[start]]--
   count++
}
if(freq[fruits[start]] == 0){
   delete freq[fruits[start]]
}
start = count
max = Math.max(max,end-start+1)
}
end++
}
return max
}