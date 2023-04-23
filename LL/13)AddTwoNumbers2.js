// LEET CODE = 445


function AddTwoNumbers(head,head1){

if(head == null || head1 == null){
    return head
}
let st = [];
let temp = head;
while(temp!=null){
    st.push(temp.val)
    temp = temp.next
}

let st1 = [];
let temp1 = head1;
while(temp1 != null){
    st1.push(temp1.val)
    temp1 = temp1.next;
}

let carry = 0;
let res = null;
let resultHead = null 
while(st.length != 0 || st1.length != 0){
let d1 = st[st.length - 1]
let d2 = st1[st1.length - 1]
if(st.length == 0){
    d1 = 0
}
if(st1.length == 0){
    d2 = 0
}
let sum = d1 + d2 + carry;
let digit = sum % 10;
carry = Math.floor(sum/10)
let newNode = new ListNode(digit);
if(resultHead == null){
    resultHead = newNode;
    res = newNode
}else{
    res.next = newNode;
    res = newNode
}
if(st.length != 0){
    st.pop()
}
if(st1.length != 0){
    st1.pop()
}
}
if(carry != 0){
let newnode = new ListNode(carry)
res.next = newnode
}
let reverse = f(resultHead)
return reverse
};

function f(curr){
 if(curr.next==null){
    return curr
}
let d=curr
let newhead=f(curr.next)
let c=curr                             // 1,2,3,4,5
curr.next.next=curr

curr.next=null
return newhead
}