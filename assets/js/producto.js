$(document).ready(function(){
    $('.slider-product').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-navproduct'
    });
    $('.slider-navproduct').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-product',
        dots: false,
        centerMode: true,
        focusOnSelect: true,        
    });


    

})