let btn=document.querySelector('button');
let darkMode=localStorage.getItem('darkMode');


function darkEnable(){
    document.body.classList.add('dark');
    //btn.classList.add('dark')
    localStorage.setItem('darkMode','enabled');
}
function darkDisable(){
    document.body.classList.remove('dark');
    //btn.classList.remove('dark')
    localStorage.setItem('darkMode',null);
}
function handleClick(){
    darkMode=localStorage.getItem('darkMode');
    console.log(darkMode);
    if(darkMode!== 'enabled'){
        darkEnable();
        console.log(darkMode);
    }
     else{
        darkDisable();
        console.log(darkMode);
     }
    
}
if(darkMode==='enabled'){
    darkEnable();
}
btn.addEventListener('click',handleClick);