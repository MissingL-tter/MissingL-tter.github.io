index = [0, 0];
names = ["particleSlides", "gatherSlides"];
for (var i = 0; i < index.length; i++) {
    showSlide(i, index[i]);
}

// ID is the position of the content on the page
// n is the position of the slide in the reel
function changeSlide(id, n) {
    showSlide(id, index[id] += n);
}

function showSlide(id, n) {
    var slides = document.getElementsByClassName(names[id]);
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (n >= slides.length) {
        index[id] = 0;
    }    
    if (n < 0) {
        index[id] = slides.length - 1;
    }
    slides[index[id]].style.display = "inline-block";
}