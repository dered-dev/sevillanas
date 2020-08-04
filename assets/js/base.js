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
})