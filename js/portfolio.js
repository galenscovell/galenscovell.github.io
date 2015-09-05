

$(window).scroll(function(event) {
    // Fade in effect when objects reached on scroll
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

$('a[href^="#"]').on('click',function (e) {
    // Swing animation on link click
    e.preventDefault();
    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
        window.location.hash = target;
    });
});


$(document).ready(function() {
    $('.about_row div').css('opacity', '0');
    $('.skills_row div').css('opacity', '0');
});