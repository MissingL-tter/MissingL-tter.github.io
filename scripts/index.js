import M from 'materialize-css';
import hljs from 'highlight.js';

// Tabs Init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tabs');

    function updateURL() {
        if (this.index == 0) {
            window.history.pushState(null, "", "#about")
        }
        else {
            window.history.pushState(null, "", "#projects")
        }
    }

    M.Tabs.init(elems, {onShow:updateURL});
});

// Tooltip Init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, {});
});

// Scrollspy
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elems, {activeClass: 'show-active', scrollOffset: 176});
});

//Materialbox
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {});
});

//Materialbox
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems, {});
});

hljs.initHighlightingOnLoad();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
});