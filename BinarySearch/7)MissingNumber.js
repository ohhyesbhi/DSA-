// LEET CODE = 268

let nums = [3,0,1]
console.log(MissingNumber(nums))

function MissingNumber(a){
   
    a.sort(fn);
function fn(x,y){
    return x-y
}

let low = 0;
let high = a.length-1;
let ans = a.length;

while(low <= high){
    let mid = Math.floor((low + high)/2);
    if(a[mid] == mid){
        low = mid+1
    }
    else{
        ans = mid
        high = mid-1;
    }
}
return ans
}