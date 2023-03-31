//LEET CODE = 34

let nums = [5,7,7,8,8,10]
let target = 8
console.log(TargetIndex(nums,target))

function TargetIndex(a,x){
    let result = []
    let low = 0;
    let high = a.length;
    let ans = 0
    let count = 0
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(a[mid] < x){
            low = mid+1
        }
        else{
            ans = mid
            if(a[ans] == x){
                count++
            }
            high = mid-1
        }
    }
    if(count == 0){
        return [-1,-1]
    }
    result.push(ans)
    let low1 = 0;
    let high1 = a.length;
    let ans1 = 0
    while(low1 <= high1){
        let mid = Math.floor((low1+high1)/2);
        if(a[mid] <= x){
            low1 = mid+1
        }
        else{
            ans1 = mid
            high1 = mid-1
        }
    }
    result.push(ans1-1)
    return result
    }
