

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



function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {
    // Fade in effect when objects reached on scroll
    $(window).scroll(function(event) {
        $('.skills_row div').each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.animate({'opacity':'1'},800);
            }
        });

        $('.projects_row div').each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.animate({'opacity':'1'},800);
            }
        });
    });

}
