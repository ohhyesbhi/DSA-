// LEET CODE = 2226

let candies = [5,8,6]
let k = 3
console.log(MaxCandies(candies,k))

function MaxCandies(candies, k) {
    let max = -Infinity
    for(let i = 0 ; i < candies.length ;i++){
        max = Math.max(max,candies[i])
    }

    let low = 1;
    let high = max
    let ans = 0
    while(low <= high){
      let mid = Math.floor((low + high)/2)
    
      if(f(mid,candies,k)){
    ans = mid
    low = mid+1
      }else{
      high = mid-1
      }}

    return ans
    }
    
    function f(mid,candies,k){
    let count = 0;
    
    for(let i = 0 ; i < candies.length ;i++){
      count = count + Math.floor((candies[i])/mid)
    }
    if(count >= k){
      return true
    }else{
      return false
    }
    }
    