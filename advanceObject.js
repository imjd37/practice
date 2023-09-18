

[2]===[2]; //false
1=="1"     //true
1==="1"    //false


                                    //output

const object1={a:5};                a:4;
const object2=object1;                 a:4;
const object3=object2;                  a:4 
const object4={a:5};                    a:5
object1.a=4;                  


class Animal {
    constructor(name,type,color){
        this.name=name;
        this.type=type;
        this.color=color;
    }

}

class Mamal extends Animal{
    constructor(name,type,color){
       super(name,type,color)
    }
    sound(){
        console.log(`Moooooo i'm ${this.name} and I'm a ${this.color}  ${this.type}`);

    }
}

const cow =new Mamal('cowww', 'cow', 'white');
cow.sound();



let obj={
    user0: "jitendra",
    user1: "ajay",
    user2: "manoj",
    user3: "kapil",
    user4: "nikhil",
    user5: "adarsh",
    user6: "abhishek"
}

Object.keys(obj).forEach((key,index) => {
    console.log(key, obj[index]);
    
});


Object.values(obj).forEach((value)=>{
    console.log(value);
})







