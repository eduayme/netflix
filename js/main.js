$(document).ready(function() {
    // change navbar background after start scrolling
    background_nav();

    $(document).scroll(function() {
        background_nav();
    });

    function background_nav() {
        if($(window).scrollTop() >= 50) {
            $('#navbar').css('background-color', '#141414');
        } else {
            $('#navbar').css('background-color', 'transparent');
        }
    }

});
