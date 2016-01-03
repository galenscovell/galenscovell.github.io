/**
 * Portfolio dynamic controls
 * ==========================
 *
 * @author GalenS <galen.scovell@gmail.com>
 */

$('a[href^="#"]').on('click',function (e) {
    // Swing animation on link click
    e.preventDefault();
    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 60
    }, 500, 'swing', function () {
        window.location.hash = target - 60;
    });
});


$(document).ready(function() {
    $('.about_row div').css('opacity', '0');
    $('.skills_row div').css('opacity', '0');
});