// LEET CODE = 230

//As we know in In-order we get the final array in sorted form and from that array find the Kth element
let result;

function f(r){
    if(r == null){
        return 
    }
    f(r.left)
    result.push(r.val)
    f(r.right)
}

function KthSmallestElement(root, k) {
 result  = []
let op = f(root) 

for(let i = 0 ; i < result.length ; i++){
    if(i == k-1){
        return result[i]
    }
}
}