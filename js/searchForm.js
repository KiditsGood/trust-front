$('.setting__visible').click(function () {
    $('.setting__hidden').slideToggle(200)
    $(this).toggleClass('open')
})

$('.cost__visible').click(() => {
    $('.cost__hidden').slideToggle(200)
})