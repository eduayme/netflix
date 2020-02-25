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

    // display more cards with load more button
    $(function () {
        $(".card").slice(0, 10).show();

        $("#loadMore").on('click', function (e) {
            e.preventDefault();
            $(".card:hidden").slice(0, 10).slideDown();
            if ($(".card:hidden").length == 0) {
                $("#loadMore").fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        });
    });

    // slider
    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var w1 = 40;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var w2 = 40;
        var r2 = x2 + w2;

        if (r1 < x2 || x1 > r2) return false;
        return true;

    }
    $('#slider').slider({
        range: true,
        min: 0,
        max: 10.1,
        step: 0.1,
        values: [ 0, 10.1 ],
        slide: function(event, ui) {

            $('.ui-slider-handle:eq(0) .price-range-min').html(ui.values[ 0 ]+'' );
            $('.ui-slider-handle:eq(1) .price-range-max').html(ui.values[ 1 ]);

            if (collision($('.price-range-min'), $('.price-range-max')) == true) {
                $('.price-range-min, .price-range-max').css('opacity', '0');
            } else {
                $('.price-range-min, .price-range-max').css('opacity', '1');
            }

        }
    });
    $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + $('#slider').slider('values', 0 ) + '</span>');
    $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('#slider').slider('values', 1 ) + '</span>');

});
