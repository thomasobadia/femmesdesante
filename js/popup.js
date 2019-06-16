let i = 0;
let txt = 'Ce site a pour but de mettre en lumière des femmes inspirantes qui ont réalisé des initiatives de santé utiles.'
let speed = 40; /* The speed/duration of the effect in milliseconds */

const typeWriter = () => {
  if (i < txt.length) {
    document.getElementById("popup--text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
//   $('body').css('overflow', 'hidden')
}

setTimeout(() => {
  typeWriter()
}, 1000);

setTimeout(() => {
    $('.home__popup__next').text("Suivant")
}, (txt.length*speed + 1500));

$('.home__popup__next').click(function(){
    $('.home__popup').fadeOut()

})







