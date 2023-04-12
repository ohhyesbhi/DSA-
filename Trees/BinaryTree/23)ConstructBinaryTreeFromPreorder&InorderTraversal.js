// LEET CODE = 105




let preIndex ;
function f(preorder, inorder, start , end){
    if(start > end){
        return null
    }

    let root = new TreeNode(preorder[preIndex])
    preIndex++
    let inIndex;
    for(let i = start ; i <= end ;i++){
        if(inorder[i] == root.val){
            inIndex = i
            break
        }
    }
    root.left = f(preorder, inorder, start, inIndex-1)
    root.right = f(preorder, inorder, inIndex + 1, end)
return root
}

var buildTree = function(preorder, inorder) {
  preIndex = 0
  return f(preorder, inorder, 0 ,inorder.length - 1)
 
};