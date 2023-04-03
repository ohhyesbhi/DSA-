// LEET CODE = 144;

let result;

var preorderTraversal = function(root) {
     result = []
    pre(root)
    return result
};

function pre(r){
    if(r==null){
        return 
    }
    result.push(r.val)
    pre(r.left)
    pre(r.right)
}