

$(document).ready(function() {

    // Smooth scroll on nav click
    $('a[href^="#"]').on('click',function (event) {
        event.preventDefault();

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });


});

// If user has javascript, setup fade effects
$('.about_row div').css('opacity', '0');
$('.skills_row div').css('opacity', '0');

// Fade in effect when objects reached on scroll
$(window).scroll(function(event) {
    $('.about_row div').each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.animate({'opacity':'1'},800);
        }
    });

    $('.skills_row div').each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.animate({'opacity':'1'},800);
        }
    });
});
