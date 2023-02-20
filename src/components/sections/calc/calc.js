$('.setting__visible').click(function () {
    $('.setting__hidden').slideToggle(200)
    $('.cost__hidden').slideUp(200)
    $('.room__hidden').slideUp(200)
})

$('.cost__visible').click(() => {
    $('.cost__hidden').slideToggle(200)
    $('.setting__hidden').slideUp(200)
    $('.room__hidden').slideUp(200)
})

$('.room__visible').click(() => {
    $('.room__hidden').slideToggle(200)
    $('.cost__hidden').slideUp(200)
    $('.setting__hidden').slideUp(200)
})

jQuery(function($){
    $(document).mouseup( function(e){ // событие клика по веб-документу
        var div = $( ".calc__field-settings" ); // тут указываем ID элемента
        if ( !div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
            $('.setting__hidden').slideUp(200); // скрываем его
        }
    });
});

jQuery(function($){
    $(document).mouseup( function(e){ // событие клика по веб-документу
        var div = $( ".calc__field-cost" ); // тут указываем ID элемента
        if ( !div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
            $('.cost__hidden').slideUp(200); // скрываем его
        }
    });
});

jQuery(function($){
    $(document).mouseup( function(e){ // событие клика по веб-документу
        var div = $( ".calc__field-room" ); // тут указываем ID элемента
        if ( !div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
            $('.room__hidden').slideUp(200); // скрываем его
        }
    });
});

$('.room__hidden-buttons_item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})

$(document).ready(function() {
    $(".cost__hidden-input--price").on('blur', function () {
        if ($(this).val() === '' || $(this).val() == 0){
            $(this).val(1)
        }
    })

    $(".cost__hidden-input--price").keydown(function(event) {
        // Разрешаем: backspace, delete, tab и escape
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {

            // Ничего не делаем
            return;
        } else {
            // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }
    });
});

$('.setting__button').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})