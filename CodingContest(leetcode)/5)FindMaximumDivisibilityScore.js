// LEET CODE = 2644
let nums = [20,14,21,10]
let divisors = [5,7,5]
console.log(maxDivScore(nums,divisors))

function maxDivScore(nums, divisors) {
    divisors.sort(fn)
    function fn(x,y){
        return x-y
    }
    let max = 0
    let ans = 0
    for(let i = 0 ; i < divisors.length ; i++){
        let count = 0
        for(let j = 0 ; j < nums.length ; j++){
            
            if(nums[j]%divisors[i] == 0){
                count++
            }
        }
        if(max < count){
            ans = divisors[i]
            max = count
        }
    }
    if(ans == 0){
        ans = divisors[0]
    }
    
    return ans
};