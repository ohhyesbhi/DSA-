// LEET CODE = 1011

let weights = [1,2,3,4,5,6,7,8,9,10]
let days = 5
console.log(shipWithinDays(weights,days))

function shipWithinDays(weight,days){

let min = Infinity ;
for(let i = 0;i < weight.length; i++){
    min = Math.min(min , weight[i])
}   

let sum = 0;
for(let i = 0;i < weight.length; i++){
    sum = sum + weight[i]
}

let low = min;
let high = sum;
let ans = 0

while(low <= high){ 
let mid = Math.floor((low + high)/2);
if(f(weight,mid,days)){
ans = mid
    high = mid-1
    }else{
    
    low = mid+1
}

}
return ans
}

function f(weight,mid,days){
let d = 0
let sum1 = 0

    for(let i = 0; i < weight.length; i++){
        sum1 = weight[i]
        if(sum1 > mid){
            return false
        }
while(sum1 <= mid){
    i++
    sum1 = sum1 + weight[i]
}
i--
d++
    }
if(d <= days){
    return true
}else{
    return false
}
}