//LEET CODE = 206

function pointerReverse(head){
let curr = head;
let prev = null;
let adjacentnode=curr.next;

while(curr != null){
    curr.next = prev; //making the connection to pevious data
    prev = curr
    curr = adjacentnode;
    if(curr != null){
        adjacentnode = curr.next
    }
}
head = prev;
return head
}













