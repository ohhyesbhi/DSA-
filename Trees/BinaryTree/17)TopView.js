let root = { data : 1 , left : {
    data : 2 , left :
    { data :4, 
      left : null,right : null},
       right : { data: 6,left : null , right : null }
  },
  
  right : { data : 3 , left:{data:5,left:null,right:null}, right:{
    data:7,left:null,right:null
  }}}

  let mp;
  let minval;
  let maxval;
  let result;

console.log(TopView(root))

function TopView(root){
     mp = {}
    result = [];
    minval = 0;
    maxval = 0;
    f(root,0)
for(let i = minval ; i <= maxval ;i++){
    result.push(mp[i])
}
let topElements = []
for(let i = 0 ; i < result.length ;i++){
    topElements.push(result[i][0])
}
return topElements
}

function f(r, col){
if(r == null){
    return
}

if(mp[col]){
    mp[col].push(r.data)
}else{
    mp[col] = [r.data]
}

minval = Math.min(minval ,col)
maxval = Math.max(maxval,col)

f(r.left , col-1)
f(r.right,col+1)
return result
} 