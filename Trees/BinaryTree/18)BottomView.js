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
  let maxval;
  let minval;
  let result = [];
console.log(BottomView(root))

function BottomView(root){
    mp = {}
    minval = 0
    maxval = 0
    f(root,0)

    for(let i = minval ; i <= maxval ;i++){
        result.push(mp[i])
    }
    let BottomEle = []

    for(let i = 0 ; i < result.length ;i++){
        BottomEle.push(result[i][result[i].length-1])
    }
return BottomEle
}

function f(r,col){
 if(r == null){
    return 
 }

 if(mp[col]){
    mp[col].push(r.data)
 }else{
    mp[col] = [r.data]
 }
maxval = Math.max(maxval,col)
minval = Math.min(minval,col)
 f(r.left,col-1)
 f(r.right,col+1)
 return result
}