let numOnes = 3
let numZeros = 2
let numNegOnes = 0
let k = 2
console.log(f(numOnes, numZeros, numNegOnes, k))

function f(numOnes, numZeros, numNegOnes, k){
    let arr = [];
    for(let i=0;i<numOnes;i++){
        arr.push(1)
    }
    for(let i=0;i<numZeros;i++){
        arr.push(0)
    }
    for(let i=0 ;i<numNegOnes;i++){
        arr.push(-1)
    }
    let result=0;
    for(let i=0;i<k;i++){
        result=result+arr[i]
    }
    return result
}