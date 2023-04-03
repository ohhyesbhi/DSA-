// LEET CODE = 94 

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
    inn(r.left)
    result.push(r.val)
    inn(r.right)

}