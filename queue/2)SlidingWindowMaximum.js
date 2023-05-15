let nums = [1,3,-1,-3,5,3,6,7]
let k = 3
console.log(maxSlididngWindow(nums,k))

function maxSlididngWindow(nums,k){
let queue = []
let result = []
for(let i = 0 ; i < k ; i++){
     while(queue.length!=0 && nums[i]>nums[queue[queue.length-1]] ){
        queue.pop()     
 }
 queue.push(i)
}
result.push(nums[queue[0]])

for(let i = k ; i < nums.length ; i++){
    if(queue[0] == (i-k)){
        queue.shift()
    }
    while(queue.length!=0 && nums[i]>nums[queue[queue.length-1]] ){
        queue.pop()     
 }
 queue.push(i)
 result.push(nums[queue[0]])
}
return result
}