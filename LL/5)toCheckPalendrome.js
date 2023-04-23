//LEET CODE = 234

let start = null
var isPalindrome = function(head) {
       
         start = head;
      return f(head)
}

function f(curr){
    if(curr == null){
        return true
    }
    let result = f(curr.next)
if(result == false){
    return result
}
       if(start.val==curr.val){
            start = start.next
            return true
        }
       else{
        return false
    }}
    
