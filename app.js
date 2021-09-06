const rock =document.querySelector('#rock')
console.log(rock)
const paper=document.querySelector('#paper')
console.log(paper)
const scissor=document.querySelector('#scissor')
console.log(scissor)

function logName(name){//with paramerter
    console.log(name)
}
logName("Harini")
logName();//undefined to rectify this error:

function logNames(Name="enter u r name"){//with paramerter
    console.log(Name)
}
logNames();//default value will b inserted
function logname(){//with out parameter
    console.log("Teja")
}
logname()
function log(Name="Harini" , age=20){
console.log(Name + " you are " + age)
}
log()
function add(a=0,b=0){
//     const sum=a+b;
//    return sum;
return a+b
}
 const result=add(12,40)
 console.log(result)
 //0r
 console.log(add(12,40))