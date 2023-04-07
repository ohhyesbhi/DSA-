//Given an array of jobs where every job has a deadline and associated profit if the
//job is finished before the deadline. It is also given that every job takes a single
// unit of time, so the minimum possible deadline for any job is 1. Maximize the total
// profit if only one job can be scheduled at a time.

let jobs = [[2,100],[1,19],[2,27],[1,25],[3,15]];
console.log(MaxProfit(jobs))

function MaxProfit(jobs){
    jobs.sort(fn);
function fn(x,y){
    return y[1] - x[1]
}

let time = 0
let profit = 0;

for(let i = 0 ; i < jobs.length ;i++){
    if(jobs[i][0]>time){
        time++
        profit = profit + jobs[i][1] 
    }
}
console.log(profit)
}