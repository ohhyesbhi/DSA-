//LEET CODE = 21

var mergeTwoLists = function(list1,list2) {
    let dummy = new ListNode(0);
      let head2 = dummy;
    
    while(list1!=null&&list2!=null){
    
        if(list1.val<list2.val){
            head2.next=list1
            list1=list1.next
        }else{
            head2.next=list2
            list2=list2.next
        }
        head2=head2.next}
    if(list1!=null){
        head2.next=list1
    }else{
        head2.next=list2
    }
    return dummy.next
    }