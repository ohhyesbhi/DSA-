// LEET CODE = 33

let nums = [4,5,6,7,0,1,2] 
let target = 0
console.log(ReturnIndex(nums,target))

function ReturnIndex(a,target){
    let low = 0;
    let high = a.length-1;
    let ans = 0
    while(low <= high){   
        let mid = Math.floor((low+high)/2);
    if(a[mid] == target){
        return mid
    }
    if(a[mid-1] == target){
        return mid-1
    }
    if(a[low] <= a[mid]){
        if(a[low] <= target && a[mid] >= target){
    high = mid-1
        }else{
            low = mid+1
        }}
        else{
    if(target >= a[mid]&&target <= a[high]){
    low = mid+1
    }else{
    high = mid-1
    }
        }
        } 
        return -1
    }    
