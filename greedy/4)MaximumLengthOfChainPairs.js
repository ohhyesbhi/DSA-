// You are given "n" pair of numbers .In every pair, the first number is always smaller
//than the second number. A pair (c,d) can come after pair (a,b) if b<c, Find the 
//longest chain which can be formed from a given set of pairs

let pairs = [[5,24],[39,60],[5,28],[27,40],[50,90]];
console.log(LongestChain(pairs))

function LongestChain(pairs){

    pairs.sort(fn)
    function fn(x,y){
        return x[1] - y[1]
    }
    let chainLen = 1
    let last = pairs[0][1]

    for(let i = 1 ; i < pairs.length ;i++){
if(pairs[i][0] > last){
    chainLen++
    last = pairs[i][1]
}
}
return chainLen
}