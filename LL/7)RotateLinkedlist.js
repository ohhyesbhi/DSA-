function rotateLL(head){

if (head == null || head.next == null){
    return head
}
let i = 0;
let temp = head;
let curr = head;
let count = 0

while(curr != null){
count++;
curr = curr.next
}

k = k % count
if(k == 0){
    return head        // if  k==0 then no need to rotate the linked lidt
}

while( i < count - k - 1){
    temp = temp.next
    i++
}
let newHead = temp.next;
temp.next = null
temp = newHead 
while(temp.next!=null){
    temp = temp.next
}
temp.next = head
return newHead

}
