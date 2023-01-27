$(window).on("scroll", function() {
    if($(window).width() > 999) {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("scroll")
        } else {
            $(".header").removeClass("scroll")
        }
    }
});