let nums = [2,4,9,13];
let NoOperations = 3;

console.log(f(nums,NoOperations))

function f(nums,o){
let max = -Infinity;
for(let i = 0; i < nums.length ; i++){
    max = Math.max(max,nums[i])
}

let low = 2;
let high = max;
let ans = -1
while(low <= high){
    let mid = Math.floor((low+high)/2)
    if(Check(nums,mid,o)){
high = mid-1
ans = mid;
    }else{
        low = mid+1
    }
}
console.log(ans)
}

function Check(nums,mid,o){

    for(let i = 0 ; i < nums.length ;i++){
        if(nums[i]>mid){
            o = o - Math.floor(nums[i]/mid);
            if(nums[i]%mid == 0){
                o++
            }
        }
    }
    return o >= 0
}