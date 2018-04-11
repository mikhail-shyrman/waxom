$(function(){
        $('.slick_slider').slick({
        slidesToShow: 1,
        dots: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
    
    var mixer = mixitup('.mixer');
});