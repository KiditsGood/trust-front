const exSlider = new Swiper('.exclusive__bot', {
    freeMode: true,
    spaceBetween: 30,
    navigation: {
        prevEl: '.exclusive__nav.prev',
        nextEl: '.exclusive__nav.next'
    },
    pagination: {
        el: '.exclusive__pagination',
        clickable: 'true'
    }
})