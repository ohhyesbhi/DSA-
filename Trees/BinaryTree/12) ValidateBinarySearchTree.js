// LEET CODE = 98

let result;
function f(r){
if(r == null){
    return 
}
 f(r.left)
 result.push(r.val)
 f(r.right)

}

function isValidBST(root) {
    result = []
let op = f(root) 
for(let i = 0 ; i < result.length ;i++){
    if(result[i] == null){
        result[i] = 0
    }
}
for(let i = 1 ; i < result.length ;i++){
if(result[i-1] < result[i]){
continue
}else{
    return false
}
}
return true


};