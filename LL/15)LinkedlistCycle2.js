// LEET CODE = 142

function DetectCycle(head){
if(head == null || head.next == null){
    return null
}
let fast = head;
let slow = head;
let IsLoop = false
while(fast.next != null && fast.next.next != null){
 slow = slow.next;
 fast = fast.next.next;

 if(fast == slow){
     IsLoop = true
     break
 }
}  

if(IsLoop == true){
slow = head;
while(slow != fast){
    slow = slow.next
    fast = fast.next
}
return slow
}
else{
return null
}
}