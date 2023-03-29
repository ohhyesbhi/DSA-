// THE PRIVATE ONES ARE ACCESSIBLE ONLY INSIDE THE CLASS                                     
                                     

                                     // EXAMPLE 1
// class product{
//     #name;
//     constructor(n,p){
// this.#name=n;
// this.price=p
//     }
// }

// const p=new product("iphonr",100000)
// console.log(p)
 
                                       //EXAMPLE 2
class product{
    #name;
    #price
    #rating
    constructor (n,p){
        this.#name=n
        this.#price=p
        this.#rating=9
    }
    display(){
        console.log("This is my new",this.#name,"with price of",this.#price,"with rating",this.#rating)
    }
}                                       
const p=new product("iphone",100000)
p.display()