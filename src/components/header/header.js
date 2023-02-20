const header = document.querySelector('.header')

function headerScroll(){
    if (window.innerWidth > 999){
        if (window.scrollY > 50){
            header.classList.add('scroll')
        }
        else {
            header.classList.remove('scroll')
        }
    }
}

window.addEventListener('scroll', headerScroll)