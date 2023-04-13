/*
You are given a 0-indexed integer array nums. There exists an array arr of length nums.length, where arr[i] is the sum of |i - j| over all j such that nums[j] == nums[i] and j != i. 
If there is no such j, set arr[i] to be 0.

Return the array arr.
*/
let nums = [1,3,1,1,2]
console.log(Distance(nums))

function Distance(arr){
let freq = {}
  for(let i = 0 ; i < arr.length ;i++){
    let curr = arr[i]
    if(freq[curr]){
      freq[curr].push(i)
    }else{
      freq[curr] = [i]
    }
  }
let key = Object.keys(freq)
let result1 = Array(arr.length).fill(0)
for(let i = 0 ; i < key.length ;i++ ){
  let curr = key[i]
  if(freq[curr].length > 1){
let arr1 = freq[curr]

    let prefixSum = []
    let sum = 0
    for(let i = 0 ; i < arr1.length ;i++){
    sum = sum + arr1[i]
    prefixSum.push(sum)
    }
    let left = 0
    let right = 0
    let result = 0
    for(let i = 0 ; i < arr1.length ;i++){
    result = 0
    left = 0
    right = 0
      if(i!=0){
       left = Math.abs(arr1[i]*(i) - prefixSum[i-1]) }
      if(i!=arr1.length-1){
       right = ( prefixSum[prefixSum.length - 1]-prefixSum[i]) - (((prefixSum.length -1) - i)*arr1[i])}
    
       result = left+right
    result1[arr1[i]] = result
    }}
}
return result1  
};