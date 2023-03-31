// LEET CODE = 875

let piles = [3,6,7,11]
let h = 8
console.log(minEatingSpeed(piles,h))

function minEatingSpeed(piles ,h){
let max = -Infinity;

for(let i = 0; i < piles.length ;i++){
max = Math.max(max,piles[i])
}

let low = 0;
let high = max;
let ans = -1;
 
while(low<=high){
    let mid = Math.floor((low + high)/2);
    if(minimum(piles,mid,h)){
        ans = mid
        high = mid - 1
    }else{
        low = mid + 1
    }
 
} 
  return ans  
};

function minimum(piles,mid,h){
let TimeTaken = 0
    for(let i = 0 ; i < piles.length ;i++){

        if(piles[i] < mid){
            TimeTaken = TimeTaken + 1
        }
        else if(piles[i] == mid){
            TimeTaken = TimeTaken + 1
        }else if(piles[i] % mid == 0){
            let ans = piles[i] / mid
            TimeTaken = TimeTaken + ans
         }else{
             let ans1 = Math.floor(piles[i]/mid)
             TimeTaken = TimeTaken + ans1 + 1
         }

    }
    if(TimeTaken <= h){
        return true
    }else{
        return false
    }
}