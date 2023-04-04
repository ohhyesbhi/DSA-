// LEET CODE = 145
// PostOrder : First we will read LEFT Subtree , Second we will read RIGHT subtree , Third we will read ROOT

let result;

var postorderTraversal = function(root) {
    result = [];
    Postorder(root)
    return result
}  

function Postorder(r){
    if(r == null){
        return
    }
    Postorder(r.left)
    Postorder(r.right)
    result.push(r.val)
}
