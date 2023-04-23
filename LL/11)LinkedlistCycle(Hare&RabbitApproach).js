
function f(head){
if(head == null){
    return false
}
let slow = head;
let fast = head;

while(fast.next != null && fast.next.next != null){
   fast = fast.next.next
   slow = slow.next
    if(fast == slow){   // we have to check the addresses not values
       return true
   }
} 
return false
};