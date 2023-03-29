class stack{
#arr;
constructor(){
    this.#arr=[]
}

push(x){
this.#arr.push(x)
}

pop(){
    this.#arr.pop()
}

TopElement(){
    console.log(this.#arr[this.#arr.length-1])
}}

const p=new stack()
p.push(1);
p.push(2);
p.push(3);
p.push(4);
p.pop()
p.TopElement()