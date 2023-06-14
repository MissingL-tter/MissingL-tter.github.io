const M = window.M;
// import hljs from '../styles/highlight.js';

document.addEventListener('DOMContentLoaded', function() {
    var tabElements = document.querySelectorAll('.tabs');

    function updateURL() {
        if (this.index == 0) {
            window.history.pushState(null, "", "#about")
        }
        else {
            window.history.pushState(null, "", "#projects")
        }
    }

    M.Tabs.init(tabElements, {onShow:updateURL});
});

document.addEventListener('DOMContentLoaded', function() {
    var tipElements = document.querySelectorAll('.tooltipped');
    var spyElements = document.querySelectorAll('.scrollspy');
    var carouselElements = document.querySelectorAll('.carousel');
    var boxElements = document.querySelectorAll('.materialboxed');
    var modalElements = document.querySelectorAll('.modal');
    
    M.Tooltip.init(tipElements, {});
    M.ScrollSpy.init(spyElements, {activeClass: 'show-active', scrollOffset: 176});
    M.Carousel.init(carouselElements, {});
    M.Materialbox.init(boxElements, {});
    M.Modal.init(modalElements, {});
});

window.clearPulse = function(element) {
    var dotBurger = document.createElement("i");
    dotBurger.innerHTML = "more_vert";
    dotBurger.classList.add("material-icons", "right");
    element.parentNode.replaceChild(dotBurger, element);
    dotBurger.click();
};

// hljs.initHighlightingOnLoad();