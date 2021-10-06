const toggle = document.querySelector('.toggle')

toggle.addEventListener('change',()=>{
    document.body.classList.toggle('light-theme')
})