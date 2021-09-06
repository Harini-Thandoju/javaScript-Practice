const element= document.getElementById('select_me')
console.log(element);
console.log(typeof element);
const element1= document.getElementsByClassName('heading')
console.log(element1);
const element2=document.getElementsByTagName('div')
console.log(element2);
const element3=document.querySelector('div#select_me');
console.log(element3);
element.innerHTML="This is from JS"//we can change the content of the element
console.log(element);//shows the modified element
element.style.color='cyan'
element.style.fontSize="40px"
//element.style="display:none"
console.log(element.classList);//lists all the classes
element.classList.add('five')
console.log(element.classList);
element.classList.remove('one')
console.log(element.classList);
const body=document.querySelector('body')
console.log(body.classList.toggle('dark'));//body has the dark class removes doesnt have adds class like if else .
const value=element.classList.contains('three')//contains checks class exist or not in boolean
console.log(value)