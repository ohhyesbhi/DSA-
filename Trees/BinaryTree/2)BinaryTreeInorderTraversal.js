// LEET CODE = 94 
// InOrder = First we will read LEFT subtree , Second we will read ROOT , Third we will read RIGHT subtree.
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
