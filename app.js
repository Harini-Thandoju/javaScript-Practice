
//for loop

for(var i=0;i<10;i++){
    var age="19"
    console.log('Iteration '+i)
}
console.log(i)
console.log(age)
//while loop
let Iteration=1
while(Iteration<10){
    console.log(Iteration)
    Iteration++
}

const balls = document.querySelectorAll('.ball')
// const balls = document.getElementsByClassName('ball')
const body = document.querySelector('body')


balls.forEach((ball, iteration) => {
    const value = iteration * 50
    ball.style = `transform:translateY(${value}px)`
})
//template strings
let ages = 19
let Name = "Sakshi"

console.log('Your age is ' + ages)
console.log(`Hi ${Name} Your age is ${ages}`)



const arr=[1,2,3,4,5]
const added=arr.push(6)
console.log(arr.includes(5));//if ele presents return true or false
console.log(arr.indexOf(1))//return index of specific ele
console.log(arr.unshift(6));//adds the arr at the beggining of arr
console.log(arr.shift())//remove the frst ele of arr
console.log(arr.splice(2,2))//it will remove from 2ndindex 2 ele 
console.log(added)

console.log(arr)
while(arr.length<15){
    arr.push("Iteration")
}
console.log(arr.length)
 
//for each
arr.forEach((element,iteration)=>{//expects to write func iterates to every ele and prints
    console.log(element,iteration)
    
})

