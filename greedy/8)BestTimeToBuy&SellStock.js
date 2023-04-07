//LEET CODE = 121



function MaxProfit(stocks){

let curr = stocks[0];
let profit = 0
let max = 0
for(let i = 1 ; i < stocks.length ; i++){
let present = stocks[i]

if(present < curr){
    curr = Math.min(curr, stocks[i])
}

if(present > curr){
    profit =  present - curr
    curr = Math.min(curr,present)
    max = Math.max(max,profit)
}}
return max
};