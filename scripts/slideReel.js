var index = [0, 0];
var names = ['.particleSlide', '.gatherSlide'];
var markerNames = ['.particleMarker', '.gatherMarker'];
for (var i = 0; i < index.length; i++) {
    showSlide(i, index[i]);
}

function showSlide(id, n) {
    var slides = $(names[id]);
    var markers = $(markerNames[id]);
    console.log(slides);
    for (var i = 0; i < slides.length; i++) {
        $(slides[i]).css('display', 'none');
        $(markers[i]).css('pointer-events', 'all');
        $(markers[i]).addClass('w3-opacity');
    }

    $(slides[n]).css('display','inline-block');
    $(markers[n]).css('pointer-events', 'none');
    $(markers[n]).removeClass('w3-opacity');
}