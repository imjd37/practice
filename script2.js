// let + const

// var a ='test';
// const b = true;
// const c = 789;

a='test2'   



// Destucturing-------

const person = {
    firstName : "john",
    lastName : "cena",
    age: 55,
    eyeColor: "blue"
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age= person.age;
// const eyeColor = person.eyeColor;

const {firstName, lastName, age, eyeColor}= person;

const a = 'test';
const b = true;
const c = 789;

// const okObj={
//     a:a,
//     b:b,
//     c:c
// };
const okObj = {a,b,c}

// template strings
const firstName = "john"
const city = "delhi"

const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no??`


//  default argument 

function isValidAge(age=10){
    return age;
}

// symbol........

let sym = Symbol("this is my first school") 

// arrow function
let whereAmI(username,location)=>{
    if(username && location){
        return "I am Not lost";

    }else{
        return "I am totally lost!";
    }
}


