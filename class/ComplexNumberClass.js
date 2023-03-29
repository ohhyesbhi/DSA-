 class complex{
    #real;
    #img;
    constructor(r,i){ 
    this.#real=r;
    this.#img=i
    }
    get real(){
        return this.#real
    }
    get img(){
        return this.#img
    }
    
    AddComplexnumber(c){
this.#real=this.#real+c.real
this.#img=this.#img+c.img
    }
   
    display(){
        console.log(this.#real,"+ i",this.#img)
    }
 }

 const c1=new complex(5,3);
 const c2= new complex(1,2);
 console.log(c1,c2)
 c1.AddComplexnumber(c2)
 c1.display()
