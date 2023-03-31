// LEET CODE = 162;

let nums = [1,2,3,1]
console.log(PeakElement(nums))

function PeakElement(nums){

    if(nums.length == 1){
        return 0
    }

  let n = nums.length-1;
  let low = 0;
  let high = n;
  
  while(low <= high){
let mid = Math.floor((low + high)/2);

if(mid+1 >= nums.length && nums[mid]>nums[mid-1]){
    return mid
}
if(mid-1<0 && nums[mid]>nums[mid+1]){
    return mid
}
if(nums[mid]>nums[mid+1] && nums[mid]>nums[mid-1]){
    return mid
}
if(nums[mid] < nums[mid+1]){
    low = mid+1
}
else{
    high = mid-1
}

  }  
  return -1
};
