// Given the weights and values of N items, put these items in knapsack
// of capacity W to get the maximum total value in a Knapsack.

let value = [60,100,120];
let weight = [10,20,30];
let W = 50
// o/p ---> first we will Choose a weight of 10kg(60) [total weight left = 50 -10 =40]
// Then we will choose 20kg(100) [total weight left = 40 -20 = 20 ] 

//At last we can't put whole 30kg beacause thge space left in bag is 20kg
//so we will add fractional of it 30kg ---> 120 then how much for 20kg??
//  (120*20)/30 = 80

// now lets add all the values of the weights we put into our bag ( 60 + 100 + 80 = 240)

//  so in general we can say that more value less weight more will be the output

// so we will calculate ratio = value/weight , then we sort based on ratio 
// ratio = [ 60/10 , 100/20 , 120/30] --> [6 , 5 , 4] (already this is in sorted(descending order))

console.log(MaxOp(value, weight, W));

function MaxOp(value, weight, W){
    let maxvalue = []

    for(let i = 0 ; i < weight.length ;i++){
        let x = Array(3).fill(0)
        maxvalue.push(x);
        maxvalue[i][0] = weight[i]
        maxvalue[i][1] = value[i]
        maxvalue[i][2] = value[i] / weight[i]; 
    }

    maxvalue.sort(fn);
    function fn(x,y){
        return y[2] - x[2];
    }

let sum = 0
for(let i = 0 ; i < maxvalue.length ;i++){
    if(maxvalue[i][0] <= W){
      sum = sum + maxvalue[i][1]
      W = W - maxvalue[i][0]
    }else{
        sum = sum + (W * maxvalue[i][2])
        break;
    }
}
return sum

}













