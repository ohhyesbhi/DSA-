// LEET CODE = 153

let nums =  [3,4,5,1,2]
console.log(ReturnMinEle(nums))

function ReturnMinEle(a){

if(a.length == 1){
    return a[0]
}   

if(a.length == 2){
    return Math.min(a[0],a[1])
}

let low = 0;
let high = a.length-1;
let ans = Infinity

while(low < high){
let mid = Math.floor((high + low)/2);
 ans = Math.min(ans,a[low])

 if(a[mid] < a[high]){
    ans = Math.min(ans,a[mid]);
    high = mid-1
}else{
    low = mid+1;
    ans = Math.min(ans,a[low])
}
}return ans
}