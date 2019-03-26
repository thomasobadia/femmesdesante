// $( ".navbar-toggler" ).click(function() {
//     if($( ".navbar-collapse" ).hasClass( "show" )){
//         $(".navbar").css("background-color", "#0B346F");
//     }else {
//         $(".navbar").css("background-color", "#0B346F");

//     }
//   })
  

$( ".header__interview__img" ).click(function() {

    if($( ".header__interview__img" ).hasClass( "col-8" )){
        $( ".header__interview__img" ).removeClass( "col-8" )
        $( ".header__interview__img" ).addClass( "col-12" )
        $( ".header__interview__side" ).css( "display", "none" )
        
    }else {
        $( ".header__interview__img" ).removeClass( "col-12" )
        $( ".header__interview__img" ).addClass( "col-8" )
        setTimeout(() => {
            $( ".header__interview__side" ).css( "display", "block" )
        }, 500);
    }
  })