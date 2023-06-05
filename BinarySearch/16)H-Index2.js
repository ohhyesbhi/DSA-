// leet code = 275;

let arr = [1,5,6,7,8]
console.log(HI(arr))

function HI(arr){

let low = 0
let high = arr[arr.length - 1]
let ans = 0
// [1,2,3,4,5,6,7,8]
while(low <= high){
    let mid = Math.floor((low+high)/2)

    if(f(mid)){
 low = mid + 1
    }else{
high = mid - 1
    }
}
return ans;

function f(x){

let low = 0
let high = arr.length - 1
while(low <= high){
    let mid = Math.floor((low+high)/2)
    let count = arr.length - mid

     if(arr[mid] >= x && count >= x){
        ans = x
        return true
     }
     else if(count < x){
        high = mid - 1
     }else{
        low = mid + 1
     }
}

return false
}
}