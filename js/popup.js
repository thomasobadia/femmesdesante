let i = 0;
let txt = 'Bienvenue sur Femmes de Santé. * Ce site a pour but de mettre en lumière des femmes inspirantes qui ont réalisé des initiatives de santé utiles.'
let speed = 40; /* The speed/duration of the effect in milliseconds */

const typeWriter = () => {
  if (i < txt.length) {
    if(txt.charAt(i) != "*"){
    document.getElementById("popup--text").innerHTML += txt.charAt(i);

    }else{
      document.getElementById("popup--text").innerHTML += '<br>'
    }
    i++;
    setTimeout(typeWriter, speed);
  }
//   $('body').css('overflow', 'hidden')
}

typeWriter()

setTimeout(() => {
    $('.home__popup__next').text("Suivant")
}, (txt.length*speed + 1000));

$('.home__popup__next').click(function(){
    $('.home__popup').fadeOut()

})







