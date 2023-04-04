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
    Postorder(r.right)
    Postorder(r.left)
    result.push(r.val)
}