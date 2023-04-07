// LEET CODE = 122

function MaxProfit(stocks){

let curr = stocks[0];
let profit = 0
for(let i = 1 ; i < stocks.length ; i++){
let present = stocks[i]
if(present < curr){
    curr = stocks[i]
}
if(present > curr){
    profit = profit + present - curr
    curr = present
}}
  return profit
};