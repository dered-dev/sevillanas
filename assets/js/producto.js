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


    function incrementValue(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
      
        if (!isNaN(currentVal)) {
          parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
          parent.find('input[name=' + fieldName + ']').val(0);
        }
      }
      
      function decrementValue(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
        
        if (!isNaN(currentVal) && currentVal > 0) {
            parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(0);
        }
    }
    
    $('.input-group').on('click', '.button-plus', function(e) {
    incrementValue(e);
    });
    
    $('.input-group').on('click', '.button-minus', function(e) {
    decrementValue(e);
    });

})