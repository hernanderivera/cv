$(document).ready(function(){
    $('.scrollPage').click(function() {
        var elementClicked = $(this).attr("href");
        var destination = $(elementClicked).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination -    0}, 1000 );
        return false;
    });
    // gototop
    $('#goToTop').hide();//
    $('.navigation-site-fixed').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('#goToTop').fadeIn();
        }
        else {
            $('#goToTop').fadeOut();
        }
    });
    $('#goToTop').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
    });
});