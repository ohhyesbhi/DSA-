//Given an array and a positive integer k, find the first negative integer
// for each window(contiguous subarray) of size k. If a window does not
// contain a negative integer, then print 0 for that window.

let nums = [-8, 2, 3, -6, 10]
let k = 2
console.log(FirstNegative(nums,k))

function FirstNegative(nums,k){
let end = 0
let start = 0
let queue = []
let result = []
let count = 0
while(end < nums.length){
if(nums[end] < 0){
  queue.push(nums[end])
}
if(end-start+1 == k && end < nums.length){
  
  if(queue.length == 0){
      result.push(0)
  }
  else{
    result.push(queue[0])
    if(nums[start] == queue[0]){
      queue.shift()
    }
  }
start++
}
end++
}
return result
}