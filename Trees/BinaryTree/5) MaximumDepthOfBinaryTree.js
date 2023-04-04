// LEET CODE = 104

var maxDepth = function(root) {
    return f(root)
};

function f(r){
    if(r == null){
        return 0
    }
    return Math.max(f(r.left),f(r.right))+1
}