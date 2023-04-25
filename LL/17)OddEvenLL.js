// LEET CODE = 328

function OddEvenList(head){
let evenH = null
    let evenT = null
    let oddH = null
    let oddT = null
    let count = 1

    while(head != null){
        if(count%2 == 0){
            if(evenH == null){
                evenH = head
                evenT = head
                head  = head.next
            }else{
                evenT.next = head
                evenT = evenT.next 
                head = head.next
            }
        count++
        }else{
            if(oddH == null){
              oddH = head
              oddT = head
              head = head.next
            }else{
                oddT.next = head
                oddT = oddT.next
                head = head.next
            }
            count++
        }
    }
if(evenH == null)
{
    return oddH
}

if(oddH == null){
    return evenH
}

evenT.next = null
oddT.next = evenH
return oddH
}