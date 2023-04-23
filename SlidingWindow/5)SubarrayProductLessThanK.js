// LEET CODE = 713
let nums = [10,9,10,4,3,8,3,3,6,2,10,10,9,3]
let k = 19
console.log(numSubarrayProductLessThanK(nums,k))

function numSubarrayProductLessThanK(nums, k) {
    
    let start = 0
    let end = 0
    let product = 1
    let count = 0
    while(end < nums.length){
        product = product * nums[end]
        if(product < k){
            count = count+end-start+1
            end++
        }
      else if(product >= k){
            product = product/nums[start]
            start++
            while(product >= k && start <= end){
                product = product/nums[start]
                start++
            }
            count = count+end-start+1
            end++
        }
    }
    return count
    };