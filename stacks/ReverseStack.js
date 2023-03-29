//Reversing of stack but we should not use extra space nothing but we have to modify the stack itself

let stack=[1,2,3,4,5];
console.log(reverse(stack))

function reverse(stack){
    if(stack.length==0){
        return
    }
    let y=stack.pop();
    reverse(stack);
    addAtBottom(stack,y) //this is same as we have done for AddBoottom stack
    return stack
}

function addAtBottom(stack,x){
    const temp=[]
   
    while(stack.length!=0){
       let b=stack.pop() //empty the stack
       temp.push(b)  //make a copy of stack 
    }
   
    stack.push(x)  //once the stack is empty push the element
   
    while(temp.length!=0){
       let x=temp.pop() //empty the temp by pushing elements into stack
       stack.push(x)
    }
    return stack
}