// LEET CODE = 148

function sortlist(head){
    if(head == null || head.next == null){
        return head
    }
    return f(head)
}

function f(head){
    if(head == null || head.next == null){
        return head
    }
    let mid = middle(head)
    let newhead = mid.next
    mid.next = null

    let lefthalf = f(head)
    let righthalf = f(newhead)

    return mergeSortedList(lefthalf,righthalf)
}

 function middle(head){
     if(head.next == null){
        return head
     }
     let slow = head
     let fast = head

     while(fast.next != null && fast.next.next != null){
         slow = slow.next
         fast = fast.next.next
     }
     return slow
 }

 function mergeSortedList(p1,p2){
     if(p1 == null || p2 == null){
         return (p1 == null) ? p2 : p1
     }
    
     let dummynode = new ListNode(0)
     let temp = dummynode

     while(p != null && p2 != null){
         if(p1.val < p2.val){
             temp.next = p1
             p1 = p1.next
         }else{
             temp.next = p2
             p2 = p2.next
         }
         temp = temp.next
     }

   if(p1 != null || p2 != null) {
       curr.next = (p1 != null) ? p1 : p2
   }
   return dummynode.next
 }
