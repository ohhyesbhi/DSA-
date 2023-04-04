// LEET CODE = 101

var isSymmetric = function(root) {
    return f(root , root)
};

function f(r1 , r2){
    if(r1 == null && r2 == null){
        return true
    }
    if(r1 == null){
        return false
    }
    if(r2 == null){
        return false
    }
return (r1.val == r2.val) && f(r1.right , r2.left) && f(r1.left , r2.right)
}
