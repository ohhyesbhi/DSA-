let nums = [1,2,2,3,3,3,5,5,5];
let x = 3;
console.log(LowerBound(nums,x))
//LOWER BOUND = find the index of first element which is greater than or equal to x
function LowerBound(nums,x){
    let low = 0;
    let high = nums.length-1;
    let ans = 0;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(nums[mid] >= x){
            ans = mid;
            high = mid-1
        }else{
            low = mid+1
        }
    }
    return ans
}