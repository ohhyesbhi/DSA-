/*
You are given a 0-indexed two-dimensional integer array nums.

Return the largest prime number that lies on at least one of the diagonals of nums. In case, no prime is present on any of the diagonals, return 0.

Note that:

* An integer is prime if it is greater than 1 and has no positive integer divisors other than 1 and itself.
* An integer val is on one of the diagonals of nums if there exists an integer i for which nums[i][i] = val or an i for which nums[i][nums.length - i - 1] = val.


*/
let nums = [[1,2,3],[5,6,7],[9,10,11]]
console.log(DiagonalPrime(nums))

function DiagonalPrime(nums){
let max = 0
    
for(let i = 0 ; i  <nums.length ; i++ ){
  let x = nums[i][i]
  if(max > x){
      continue
  }
  let count = 0
 if(IsPrime(x)){
     max = Math.max(x,max)
 }
}


function IsPrime(x){
    if(x<2){
        return false
    }
    let count1 = 0
     for(let i = 2 ;  i <= x; i++){
      if(x % i == 0 && x/i!=1){
       count1++
          break
      }
  }
    if(count1 == 0){
      //  max = Math.max(max,c)
        return true
    }else{
        return false
    }
}


for(let i = 0 ; i <nums.length ; i++){
    let c = nums[i][nums.length - i - 1]
    if(max > c){
      continue
  }
      if(IsPrime(c)){
          max = Math.max(c,max)
      }
  }

return max
};