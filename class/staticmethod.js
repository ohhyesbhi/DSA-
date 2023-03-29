// class hey{
//     static custommethod(){
//         console.log("hey ")
//     }
// }
// hey.custommethod()


class product{
    rating;
    description;
    #name="abhishek"
    #price="500"
    constructor(n,p){
        this.#name=n
        this.#price=p
    }
    display(){
        console.log("this is new",this.#name,"with price",this.#price)
    }
}

const p=new product("iphone",100000)
console.log(p)
p.display()