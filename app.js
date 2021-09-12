

var arr = [1,2,3,4];
console.log(arr[2]);

var [one, two, three, four, five] = arr; //ES6 Destructuring
console.log(three);
console.log(four);
console.log(five);


function getscores() {
    return [90,100];
}

let [x,y,z] = getscores();
console.log(x);
console.log(y);
console.log(z);


const obj = {
    fullname: "Nikhil Agarwal",
    email: "nikhilagarwaliitkgp@gmail.com",
    age: 20
}

console.log(obj.email)

let {dum, age, email, fullname} = obj;
console.log(fullname)
console.log(dum)

let person ={
    firstname:"Harini",
    lastname:"Thandoju",
    age1:20,
    middlename:"jshdbf"
}
let {age1,firstname,lastname,middlename=""} = person;
console.log(age1);
console.log(firstname)
console.log(lastname)
console.log(middlename)

//ES-6 Arrow functions


// function add(x,y){
//     return x+y;
// }
// let add=function(x,y){
//     return x+y;
// }
// console.log(add())//NAN(not any number)
// console.log(add(10,20))

let add=(x,y)=>x+y//ES-6 arrows are short form to function
console.log(add(10,20))
//or
let add1=(x,y)=>{
    return x+y;
}
console.log(add(10,20))

const counter={//obj
     count:2,
    next:function(){//method
        return ++(this.count)*100;//this means it is excecuting the object which is currently being used
    },
    key: this,//calling whole window
agarwal:(x,y)=>{
    //return --(this.count)//arrow func doesnt have this function in it
    return --(counter.count)*100
}
}
console.log(counter)
console.log(counter.next());
console.log(counter)
console.log(counter.next());
console.log(counter)
console.log(counter.next());
console.log(counter.agarwal())
console.log(counter.agarwal())
console.log(counter.agarwal())