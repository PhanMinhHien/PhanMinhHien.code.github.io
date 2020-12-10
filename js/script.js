$(window).resize(function() {
    removeHeights();
    equalize();

});

function equalize() {
    $(".box-partner").each(function() {
        var heights = $(this).find(".slick-slide").map(function() {
                return $(this).height();
            }).get(),
            maxHeight = Math.max.apply(null, heights);
        $(this).find(".slick-slide").height(maxHeight);
    });
}

function removeHeights() {
    $(".box-partner").each(function() {
        $(this).find(".slick-slide").height("auto");
    });
}
$('document').ready(function() {
    $('#slide-one').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('#comment-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 769,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('#slider-partner').slick({
        arrows: true,
        infinite: true,
        dots: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    dots: false,
                    infinite: true,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: false,
                    infinite: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: false,
                    slidesToShow: 2
                }
            }
        ]
    });
    $('#block-slide-hot').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    dots: false,
                    infinite: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: false,
                    infinite: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    dots: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('#slider-post').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    dots: false,
                    infinite: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: false,
                    infinite: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    dots: false,
                    slidesToShow: 1
                }
            }
        ]
    });
});