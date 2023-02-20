$('.product__buttons-like').click(function () {
    $(this).toggleClass('active')
})

$('.product__buttons-phone').click(function () {
    $(this).attr('href', 'tel:' + $(this).attr('data-phone'))
    $(this).text($(this).attr('data-user') + ' ' + $(this).attr('data-phone'))
    $(this).addClass('active')
})