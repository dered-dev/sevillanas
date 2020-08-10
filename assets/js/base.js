$(function(){
    $('.close__menu').click(function(e){
        e.preventDefault()
        $('.header').toggleClass('open')
    })
    if($('.select__rating').length > 0){
        $('.select__rating').barrating({
            theme: 'css-stars'
        });
    }

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

    $('.trigger__cart').hover(function(e){
        e.preventDefault()
        $('.ctn__header__cart').toggleClass('open')

    })

    // valid credit card
    $(".only__numbers").keypress(function (e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $(this).addClass('error')
            return false;
        }
    });
})