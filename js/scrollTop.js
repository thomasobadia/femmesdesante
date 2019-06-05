if ($('html').scrollTop() > 400){
    $('.scroll-up').css('display', 'flex')
}
else{
    $('.scroll-up').css('display', 'none')
}

$(window).scroll(() =>{
    if ($('html').scrollTop() > 400){
        $('.scroll-up').css('display', 'flex')
    }
    else{
        $('.scroll-up').css('display', 'none')
    }
})

$('.scroll-up').click(function(){
    $("a.project__overlay").css('display','none')
    $('html, body').animate({
        scrollTop:$('body').offset().top
    }, 'slow');    
})


