const btn =document.querySelector('.button_three')
const body=document.querySelector('body')
btn.addEventListener('click',()=>{
    if (body.className===''){
        body.classList.add("dark")
    }else {
        body.className= ""
    }
})