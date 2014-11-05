

$(document).ready(function(){

    // Smooth scroll on nav click
    $('a[href^="#"]').on('click',function (event) {
        event.preventDefault();

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });


    // Nav show on scroll down
    var previousScroll = 0;
    var headerOffset = $('#nav').height();

    $('#nav-wrap').height($('#nav').height());
    $('#nav-wrap').slideUp(0);
    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > headerOffset) {
            if (currentScroll > previousScroll) {
                $('#nav-wrap').slideDown(750);
            }
        }
        previousScroll = currentScroll;
    });


});
