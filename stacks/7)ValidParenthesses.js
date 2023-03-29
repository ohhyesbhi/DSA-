// STACKS -: imagine a stack of plates where we add and remove the plates from top so that they won't fall
// hence in stacks we have accessible only to the top one's and they follow LIFO stratergy (last in first out)

/*implementation 
stack =[]
stack.push() and using stack.pop()*/

// LEET CODE-20th problem based on stack

 let s="{[()]}"
 console.log(validparenthesses(s))

 function validparenthesses(s){
let stack=[];
for(let i=0;i<s.length;i++)
{
    if(s[i]=="("||s[i]=="["||s[i]=="{"){
        stack.push(s[i])
    }
    else{
        let current=s[i];
        let lastelement =stack[stack.length-1]
        if(stack.length==0){
            return false
        }
        if(current==")"&&lastelement!="("){
            return false
        }
        if(current=="]"&&lastelement!="["){
            return false
        }
        if(current=="}"&&lastelement!="{"){
            return false
        }
        stack.pop()
    }
}
return stack.length==0;
 }