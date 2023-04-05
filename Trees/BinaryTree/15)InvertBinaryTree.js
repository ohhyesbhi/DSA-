//LEET CODE = 226


function f(r){
    if(r == null){
      return null
    }
    f(r.left)
    f(r.right)
    let temp = r.left
    r.left = r.right
    r.right = temp
  }
function invertTree(root) {
    f(root)
    return root 
 };