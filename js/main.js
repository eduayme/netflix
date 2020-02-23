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

    $(function () {
        $(".card").slice(0, 12).show();

        $("#loadMore").on('click', function (e) {
            e.preventDefault();
            $(".card:hidden").slice(0, 12).slideDown();
            if ($(".card:hidden").length == 0) {
                $("#loadMore").fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        });
    });

});
