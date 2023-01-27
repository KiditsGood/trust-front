$('.know__visible-show').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active')
        $(this).parent().next().slideUp(200)
    }
    else {
        $('.know__hidden').slideUp(200)
        $('.know__visible-show').removeClass('active')

        $(this).parent().next().slideDown(200)
        $(this).addClass('active')
    }
})