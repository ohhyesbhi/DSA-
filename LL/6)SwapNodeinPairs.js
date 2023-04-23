// LEET CODE = 24



    function swapPairs (head) {
    if(head == null || head.next == null){
      return head
    }
      let prev = head;
      let curr = head.next.next;
  
      head = head.next;
      head.next = prev
  
      while(curr != null && curr.next != null){
        prev.next = curr.next;
        prev = curr;
        let temp = curr.next.next;
        curr.next.next = curr ;
        curr = temp
      }
      prev.next = curr
      return head
  };