// LEET CODE = 209

let target = 7
let nums = [2,3,1,2,4,3]
console.log(minSubArrayLen(target,nums))

function minSubArrayLen(target,nums){
let start = 0
let end = 0
let ans = 0
let min = Infinity
while(end < nums.length){
ans = ans + nums[end]

if(ans >= target){
while(ans >= target)
{    min = Math.min(min,end+-start+1)
    ans = ans - nums[start]
    start++
}}
end++
}
if(min == 0){
    return 1
}
if(min == Infinity){
    return 0
}
return min
}