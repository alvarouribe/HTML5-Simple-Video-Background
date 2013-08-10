//
// HTML5 Simple Video Background
// github.com/ctidd/HTML5-Simple-Video-Background
//


// Javascript:

$(document).ready(function() {

    $(window).load(function() {
        resizeVideoBackground();
    });

    $(window).resize(function() {
        resizeVideoBackground();
    });

});

function resizeVideoBackground() {

    var backgroundHeight = $('.video-background video').height();
    var backgroundWidth = $('.video-background video').width();

    var htmlHeight = $('html').height();
    var htmlWidth = $('html').width();

    if (backgroundHeight > htmlHeight) {
        $('.video-background video').css('margin-top', '-' + (backgroundHeight-htmlHeight)/2 + 'px');
    } else {
        $('.video-background video').css('margin-top', '0');
    }

    if (backgroundWidth > htmlWidth) {
        $('.video-background video').css('margin-left', '-' + (backgroundWidth-htmlWidth)/2 + 'px');
    } else {
        $('.video-background video').css('margin-left', '0');
    }

}
