$('#particleButton').click(function() {
    $("#particleModal").css('visibility', 'visible');

    $('#particleModalContent').load('particleFilterExample.html', function() {
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });
});
$('#particleModalButton').click(function() {
    $("#particleModal").css('visibility', 'hidden');
});