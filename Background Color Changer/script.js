const body=document.querySelector('body');
const box=document.querySelector('.box');
console.log(box);

box.addEventListener('mouseover',(event)=>{
    body.style.backgroundColor=event.target.id;
})
