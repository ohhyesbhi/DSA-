



let start = null;
head = DataRecursive(head)

function DataRecursive(head){
    start = head;
    f(head)
    return head
}

function f(curr){
    if(curr == null){
    return false
    }
let result = f(curr.next)

if(result == false){
    let t = start.data;
    start.data = curr.data;
    curr.data = t;
    let response = (start == curr) || (start.next == curr);
    start = start.next;
    return response
}
else{
    return result
}
}