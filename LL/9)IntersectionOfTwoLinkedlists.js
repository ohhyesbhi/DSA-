// LEET CODE = 160;

function f(head,head2){

let curr = head;
let a = 0;
let b = 0;

while(curr != null){
    a++;
    curr = curr.next
}

curr = head2;
while(curr!= null){
    b++;
    curr = curr.next
}

let diff = Math.abs(a-b);
if(a>b){
    while(diff--){
        head = head.next
    }
}else{
    while(diff--){
        head2 = head2.next
    }
}

while(head && head2){
    if(head == head2){
return head2
    }else{
        head = head.next;
        head2 = head2.next
    }
}
return null
};