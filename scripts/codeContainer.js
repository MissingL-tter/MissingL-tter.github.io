$('#particleButton').click(function() {
    $('#particleCode').css('visibility', 'visible');

    $('#particleCodeContent').load('particleFilterExample.html', function() {
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });
});

$('.codeButton').click(function() {
    $('.underlay').css('visibility', 'hidden');
});

$('.underlay').click(function() {
    $('.underlay').css('visibility', 'hidden');
});