
function AddTwoNumbers(l1,l2){

let res = null;
let resulthead = null;
let temp1 = l1;
let temp2 = l2;
let carry = 0;

while(temp1 != null || temp2 != null){
    let d1 = (temp1 != null)?temp1.val : 0;
    let d2 = (temp2 != null)?temp2.val : 0;
    let sum = d1 + d2 + carry;
    let digit = sum % 10;
    carry = Math.floor(sum/10);
    let newnode = new ListNode(digit)
    if(resulthead == null){
     resulthead = newnode
     res = newnode
    }else{
        res.next = newnode;
        res = newnode
    }
    if(temp1 != null){
        temp1 = temp1.next
    }
   if(temp2 != null){
        temp2 = temp2.next
    }
}
if(carry != 0){
    let newnode = new ListNode(carry);
    res.next = newnode
}
return resulthead

}