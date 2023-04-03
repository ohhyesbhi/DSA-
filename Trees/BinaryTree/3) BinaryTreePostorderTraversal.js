// LEET CODE = 145

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