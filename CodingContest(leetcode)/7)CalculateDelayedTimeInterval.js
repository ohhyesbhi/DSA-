// LEET CODE = 2651

let arrivalTime = 15
let delayedTime = 5
console.log(findDelayedArrivalTime(arrivalTime,delayedTime))

function findDelayedArrivalTime(arrivalTime, delayedTime) {
    let sum = arrivalTime+delayedTime
    if(sum == 24){
        return 0
    }
   if(sum < 24){
       return sum
   }
    if(sum > 24){
        let result = sum - 24
        return result
    }
};