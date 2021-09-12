
//map is similar to for each both of them supports arrow func only diff is map returns new array after the iterationbut for each doesnt


let ranks=[1,2,3]
const newArrs=ranks.map((e)=>console.log(e+1));//incrementing
console.log(newArrs);

let rank1=[1,2,3]
const newArr1=rank1.map((e)=>e+1);//incrementing
console.log(newArr1);

let rank2=[1,2,3]
console.log(rank2.map((e)=> e+1));

let rank3=[1,2,3]
console.log(rank3.map((e)=>{ return (e+1)}));//if we put curly braces then we need to write return stmt

let rank=[1,2,3,4]

console.log(
    rank.map((e,index)=>{
         return e*100
    })
);
console.log(
    rank.forEach((e,index)=>{
     return e*100
    })
    );
    let newarr=rank.map((e,index) =>{//map working on all array but we r returning only even no. for odd we r not returning anything so its undefined by default
        console.log(e)
        console.log(index)//prints the index of each ele
        if(e%2==0)
        return e
    })
    console.log(newarr)

    //filter
    //use to run a func in every ele in array and return new array whth sall the ele which match the condition specified in the condition

let newfilterarr=rank.filter((e,index) =>{//it will print only even not undefined
        console.log(e)
        if(e%2==0)
        return e
    })
    console.log(newfilterarr)

    //promise->it is a keyword which is actually a constructor

    //promise is a js obj that return a value that we owe to receive in the future but not immediately
    // promise is very well used to do asynchronous operations
    // three states of Promise
    // ->pending:Wait->promise starts at pending stage indicated promise doesnt completed it either gets fullfilled or rejected
    // ->(Resolve)fullfiled:successful->
    // ->rejected->fail

let concert=true;
let attendconcert=new Promise(function(resolve, reject){
    setTimeout(() => {//asynchronous task
        if(concert){
        resolve("BOB ATTENDED THE CONCERT");
    }
else{
    reject("BOB FAILED TO ATTEND THE CONCERT");
}
    },2000);//after two seconds it shows fulfilled
});
console.log(attendconcert)

attendconcert.then((data)=>console.log(data));//.then method displays the data after the particular task mentioned
// attendconcert.catch((error)=>console.log(error));//catch will be executed when it is rejected here it will not execute becoz the code is about resolve state

let concrt=false;//reject stage
let attendconcrt=new Promise(function(resolve, reject){
    setTimeout(() => {
        if(concrt){
        resolve("BOB ATTENDED THE CONCERT");
    }
else{
    reject("BOB FAILED TO ATTEND THE CONCERT");
}
    },2000);//after two seconds it shows fulfilled
});
console.log(attendconcrt)

// attendconcrt.then((data)=>console.log(data));//gives error becoz it is used in fulfilled stage
attendconcrt.catch((error)=>console.log(error));//catch will be executed when it is rejected

console.log("HI!! I wont wait for anyone")

