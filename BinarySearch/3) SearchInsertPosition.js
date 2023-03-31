// LEET CODE = 35;
let nums = [1,3,5,6] 
let target = 5
console.log(SearchIndex(nums,target))

function SearchIndex(nums,target){

let low = 0;
let high = nums.length - 1;
let ans = nums.length;

while(low <= high){
    let mid = Math.floor((low + high)/2);
    if(nums[mid] >= target){
        ans = mid;
        high = mid-1;
    }else{
        low = mid+1
    }
}
return ans
}