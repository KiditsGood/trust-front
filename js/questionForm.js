$('.answer__item').click(function () {
    $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
})

let maxRes = 0

$('.question__item').each((index, el) => {
    if (index > maxRes) {
        maxRes = index
    }
})

$(window).on('load', () => {
    $('.question__num-second').text(maxRes + 1)
})

$('.question__item').each((index, el) => {
    $(el).find('.question__buttons-next').click(() => {
        if (index < maxRes) {
            $(el)
                .removeClass('active')
                .next()
                .addClass('active')
        }
    })
    $(el).find('.question__buttons-prev').click(() => {
        if (index > 0) {
            $(el)
                .removeClass('active')
                .prev()
                .addClass('active')
        }
    })
    $(el).find('.question__num-first').text(index + 1)
})