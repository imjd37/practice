const array = [
  {
    userName: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    userName: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    userName: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    userName: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let array2=[];
array.forEach((user)=>{
        let {userName}= user;
        userName=userName + "!";
        array2.push(userName);
})
//Create an array using map that has all the usernames with a "? to each of the usernames
console.log(array2);

let array3=array.map((user)=> user.userName+"?")
console.log(array3);

//Filter the array to only include users who are on team: red
let filterArray=array.filter((user=> user.team==="red"))

console.log(filterArray);


//Find out the total score of all users using reduce

let totalScore=array.reduce((accu,arr)=> accu+arr.score,0);

console.log(totalScore);


// somemore array practics..

let numArray=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let numArray2=[...numArray].map((x)=>x+1);
 numArray2.push(22);
 

let numarray5=numArray.slice(1,5,5);
console.log(numarray5)

newNum=numArray.find((x)=>x>8);
console.log(newNum);

let numArray3=numArray.filter((x)=>x===5);
console.log(numArray3)

let sumArray=numArray.filter((x)=>x>5).reduce((acc,num)=>acc+num);
console.log(sumArray)

let numArray4= numArray.map((x)=>x*2).reduce((acc,num)=>acc+num);
console.log(numArray4);


const dragons= ['tim','johnathan', 'sandy','sarah'];

console.log(dragons.includes('john'))    //false 
console.log(dragons.includes('tim'))  //true

console.log(dragons.filter((x)=>x.includes('john')));




