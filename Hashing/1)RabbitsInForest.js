// LEET CODE = 781


let answers = [1,1,2,2,1,2]
console.log(numRabbits(answers))

function numRabbits(answers){
    let freq = {}
let ans = 0
 for(let i = 0 ; i < answers.length ;i++){
     let curr = answers[i]

if(!freq[curr]){
    freq[curr] = curr
    ans = ans + curr + 1
}else{
    freq[curr]--
    if(freq[curr] == 0){
        delete freq[curr]
    }
}
 }
 return ans
}