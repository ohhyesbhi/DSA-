let obj={ x:10,fun(){
    y={x:50,
        gun:()=>{
            console.log(this.x)
           }   }
        y.gun()
    
}}
obj.fun()