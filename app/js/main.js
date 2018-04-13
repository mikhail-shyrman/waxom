$(function(){
    $('.slick_slider').slick({
        slidesToShow: 1,
        dots: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    $('.post_slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        prevArrow: $('.post_prev'),
        nextArrow: $('.post_next'),
//        responsive: [
//            {
//                breakpoint: 768,
//                settings: {
//                    arrows: false,
//                    centerMode: true,
//                    centerPadding: '40px',
//                    slidesToShow: 3
//                }
//            },
//            {
//                breakpoint: 480,
//                settings: {
//                    arrows: false,
//                    centerMode: true,
//                    centerPadding: '40px',
//                    slidesToShow: 1
//                }
//            }
//        ]

    });

    var mixer = mixitup('.mixer');

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
});