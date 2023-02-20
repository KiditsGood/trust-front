const answerItem = document.querySelectorAll('.answer__item')
const questionItem = document.querySelectorAll('.question__item')
let maxRes = 0

$('.answer__item').click(function () {
    $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
})

function questionIndex(){
    questionItem.forEach((el, index) => {
        if (index > maxRes){
            maxRes = index
        }
    })
}

function questionHandler(){
    questionItem.forEach((el, index) => {
        el.querySelector('.question__buttons-next').addEventListener('click', () => {
            if (index < maxRes) {
                el.classList.remove('active')
                el.nextElementSibling.classList.add('active')
            }
        })
        el.querySelector('.question__buttons-prev').addEventListener('click', () => {
            if (index > 0) {
                el.classList.remove('active')
                el.previousElementSibling.classList.add('active')
            }
        })
        el.querySelector('.question__num-first').innerHTML = (index + 1).toString()
    })
}

questionIndex()
questionHandler()