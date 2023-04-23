//LEET CODE = 143

function ReorderList(head){
if(head == null || head.next == null){
    return head
}
let temp = head;
let count = 0
while(temp != null){
count++;
temp = temp.next;
}
let mid = Math.floor(count/2)
let temp1 = head;
let i = 1;
while(i < mid){
temp1 = temp1.next;
i++
}
let result = temp1.next;
temp1.next = null
let result1 = f(result)

let a = head;
let b = result1;

while(a!=null && b!=null){
let nextt = a.next
a.next = b;
a = nextt
let next1 = b.next;

b.next = a
b = next1

}
let res = head;
while(res.next != null){
res = res.next
}
if(a != null){
res.next = a
}
if(b != null ){
res.next = b
}
return head
}

function f(curr){
if(curr.next==null){
    return curr
}
let d=curr
let newhead=f(curr.next)
curr.next.next=curr

curr.next=null
return newhead
}   
