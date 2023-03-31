// LEET CODE = 69

let x = 4
console.log(sqrt(x))

function sqrt(x){
let y = 0
if(x == 0){
    return 0
}
if(x == 1){
    return 1
}
for(let i = 0;i <= x; i++){
    if(i*i <= x){
        y = i
    }else{
        return y
    }
}
};