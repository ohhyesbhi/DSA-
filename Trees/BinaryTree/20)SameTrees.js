//LEET CODE = 100
// Do the pre-order for p and q and then store the each node values in two arrays and afer completing it compare both the arrays

let result;
 let result1;

 var isSameTree = function(p, q) {
    result = []
    result1 = []

    pre(p)
    pre1(q)

    for(let i = 0 ; i < result1.length ;i++){
       if(result[i] == result1[i]){
           continue
       }else{
           return false
       }
   }
   return true
};

function pre(r){
if(r == null){
    result.push(0)
    return
}
result.push(r.val)
    pre(r.left)
    pre(r.right)
}

function pre1(r){
if(r == null){
result1.push(0)
return
}
result1.push(r.val)
    pre1(r.left)
    pre1(r.right)

}