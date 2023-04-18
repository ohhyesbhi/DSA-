// LEET CODE = 930
let nums = [1,0,1,0,1]
let goal = 2;
console.log(numSubarraysWithSum(nums,goal))

function numSubarraysWithSum(nums, goal) {
let sum = 0
for(let i = 0 ; i < nums.length ; i++){
  sum = sum + nums[i]
  nums[i] = sum
}

let freq = {}
let count = 0
// in one go we have to calculate
for(let i = 0 ; i < nums.length ; i++){
  let curr = nums[i]
  if(nums[i] == goal){
    count++
}
 if(freq[nums[i] - goal]){
    count += freq[nums[i]- goal]
}
  if(freq[curr]){
    freq[curr]++
  }else{
    freq[curr] = 1
  }
}
return count
}