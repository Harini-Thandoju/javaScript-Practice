//event listeners
const button = document.querySelector('button')
const element=document.querySelector('body')


button.addEventListener('click', () =>{
    element.classList.toggle("dark")//if it has the dark class , toggle removes it, if it doesnt , toggle adds the dark class
    // toggle is a method 
   
})