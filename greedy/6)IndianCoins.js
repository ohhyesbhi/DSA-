
let amt = [1,2,5,10,20,50,100,500,2000]
//Approach = sort the amt ins descending oredr
let a = 590;
console.log(MinCoins(amt,a))

function MinCoins(amt,a){
    amt.sort(fn)
    function fn(x,y){
        return y-x
    }
//590;
let coins = a
let count = 0
for(let i = 0 ; i < amt.length ;i++){
    if(coins == 0){
        break
    }
if(amt[i] < coins){
    while(amt[i] <= coins){
coins = coins - amt[i]
count++
    }
}
}
return count
}
