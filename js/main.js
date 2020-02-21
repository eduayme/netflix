$(document).ready(function() {
    // change navbar background after start scrolling
    $(document).scroll(function() {
        if($(window).scrollTop() >= 50) {
            $('#navbar').css('background-color', '#141414');
        } else {
            $('#navbar').css('background-color', 'transparent');
        }
    });

});
