// LEET CODE = 236
// WE HAVE TO RETURN THE NODE


let root = {data : 3 , 
    left : { data : 5 , 
        left :{ data : 6 , left: null , right: null},
        right:{data: 2 , left :{ data: 7, left:null, right: null} , right :{data :4,left :null,right: null }}
    },
    right :{ data :1, left:{data :0 , left:null, right:null},right:{data: 8 ,left:null, right:null}}
   
 }
 let p = 5
 let q = 4
 let result;
 let result1;
 let result2;
console.log(hey(root,p,q))

function hey(root,p,q){
result = []
result1 = []

f(root,p)
f1(root,q)

let ans = 0
let count1 = 0
for(let i = 0 ; i < result.length ;i++){
    if(q==result[i]){
        ans = q
        count1++
        break
    }
}

let count2 = 0
if(count1==0){
for(let i=0; i < result1.length ;i++){
    if(p==result1[i]){
        ans = p
        count2++
    }
}}

let count = 0
if(count2==0 && count1 ==0){
for(let i = 0;i < result.length ;i++){
    for(let j= 0; j < result1.length ;j++){
        if(result[i] == result1[j]){
           count++
            ans = result[i]
            break;
        }
    }
    if(count>0){
        break
    }
}}

result2 = {}
f3(root,ans)
return result2
}

function f3(r,ans){
    if(r == null){
        return
    }
    if(r.data == ans){
    result2 = r
    return
}
let c = f3(r.left,ans)
 let d= f3(r.right,ans)

}

function f(r,p){
    if(r == null){
        return
    }
    if(r.data == p){
        return true
    }

    let l = f(r.left,p)
    if(l == true){
    result.push(r.data)
    return true
    }
    let ri = f(r.right,p)
    if(ri == true){
        result.push(r.data)
        return true
    }
    return false

}


function f1(r,q){
    if(r == null){
        return
    }
    if(r.data == q){
        return true
    }

    let l = f1(r.left,q)
    if(l == true){
    result1.push(r.data)
    return true
    }
    let ri = f1(r.right,q)
    if(ri == true){
        result1.push(r.data)
        return true
    }
    return false

}



