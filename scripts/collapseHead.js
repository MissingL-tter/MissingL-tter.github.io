var $content = $('.content');
var $title = $('.title');
var $header = $('.header');

var contentMargin = parseInt($content.css('margin-top'));

$(window).scroll( function() {

    console.log(contentMargin)

    var top = $(this).scrollTop();
    if (top >= $header.position().top & $title.css('display') != 'none') {
        $title.css('display', 'none');
        $header[0].classList.add('w3-top');
        $content.css('margin-top', $title.height() + $header.height() + contentMargin);
    } else if (top <= $title.height()) {
        $title.css('display', 'block');
        $header[0].classList.remove('w3-top');
        $content.css('margin-top', contentMargin);
    }
});