$(function(){
    $('.close__menu').click(function(e){
        e.preventDefault()
        $('.header').toggleClass('open')
    })
})