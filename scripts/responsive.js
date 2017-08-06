var $window = $(window);
var $title = $('#title');
var $header = $('#header');
var $content = $('#content');
$codeContainer = $('.codeContainer');

positionContent();

$window.resize(function() {
    positionContent();
});

$window.scroll( function() {

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

function positionContent() {
    if($window.width() > 992) {
        $content.css('max-width','80%');
        $codeContainer.css('width','80%');
    } else {
        $content.css('max-width','100%');
        $codeContainer.css('width','100%');
    }
}