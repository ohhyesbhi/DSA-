//LEET CODE -: 237 PROBLEM NUMBER

var deleteNode = function(node) {
    node.val=node.next.val;
    node.next=node.next.next
    } 