// LEET CODE = 1539

let arr = [1,3];
let k = 1;

console.log(MissingKthElement(arr,k))

function MissingKthElement(arr,k){
    let low = 0;
    let high = arr.length + k ;

while(low <= high){

    let mid = Math.floor((low + high)/2);
    if(arr[mid] - (mid + 1) < k){
low = mid + 1
    }else{
        high = mid-1
    }
}
return low + k
}