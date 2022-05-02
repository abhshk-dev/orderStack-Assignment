let div=document.querySelector('#john');

let input=document.querySelector('#name');


function handleFocus(event){
    console.log(event.target);
    event.target.classList.add('shape');
}
input.addEventListener('focus',handleFocus);