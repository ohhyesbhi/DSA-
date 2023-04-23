//REMOVE THE Nth NODE FROM END

var removeNthFromEnd = function(head, k) {
    if(head==null){
         return null
     }
     if(head.next==null){
         return null
     }
     if(head.next.next==null&&k==1){
 let temp=head;
 temp.next=null;
 return head
     }
     if(head.next.next==null&&k==2){
     return head.next
     }
     let temp=head;
     let count=0;
     while(temp!=null){
         count++;
         temp=temp.next
     }
 let i=count-k
 if(i==0){
     let temp1=head;
     let c=temp1.next;
     temp1.next=null
     head=c;
     return head
 }
 let j=0
 temp=head
 while(j<i-1){
     temp=temp.next;
     j++
 }
 let d=temp.next.next
 let c=temp.next;
 temp.next=d
 c.next=null
 return head 
 };