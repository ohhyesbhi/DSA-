let result

var inorderTraversal = function(root) {
   result = []
    inn(root)
    return result
}

function inn(r){
    if(r == null){
        return
    }
    inn(r.right)
    result.push(r.val)
    inn(r.left)

}