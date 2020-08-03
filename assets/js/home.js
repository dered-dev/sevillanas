if($('.slider__home').length > 0){
    $('.slider__home').bxSlider({
        auto: true,
        pause: 8000,
        controls: false,
        adaptiveHeight: true
    })

    if($('.select__rating').length > 0){
        $('.select__rating').barrating({
            theme: 'css-stars'
        });
    }
}