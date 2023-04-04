// LEET CODE = 144;
// PreOrder = First we will read ROOT , Second we will read LEFT sub-tree , Third we will read RIGHT Sub-tree.

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
