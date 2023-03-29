class product{
#name;
#price;
constructor(n,p){
    this.#name=n;
    this.#price=p
}

getName(){
    console.log(this.#name)
}
setName(newname){
    this.#name=newname
    console.log(this.#name)
}

}

const p=new product("iphone",100000)
//p.getName()
p.setName("samsung")