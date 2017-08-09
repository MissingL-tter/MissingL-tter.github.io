var $title = $('.title');
var $header = $('.header');

$(window).scroll( function() {

    var top = $(this).scrollTop();
    if (top >= $header.position().top & $title[0].style.display != "none") {
        $title[0].style.display = "none";
        $header[0].classList.add("w3-top");
        $content.css('margin-top', $title.height() + $header.height());
    } else if (top <= $title.height()) {
        $title[0].style.display = "block";
        $header[0].classList.remove("w3-top");
        $content.css('margin-top', 0);
    }
});