let i = 0;
let txt = 'Salut Jayminbhai Patel ! \n J\'espère que tu aimes cet effet et que ça rend bien ! \n Salut aux autres aussi si vous regardez. Je ferai plus jamais de lorem ipsum !'
let speed = 30; /* The speed/duration of the effect in milliseconds */

const typeWriter = () => {
  if (i < txt.length) {
    document.getElementById("popup--text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
//   $('body').css('overflow', 'hidden')
}

setTimeout(() => {
    $('.home__popup__next').fadeIn()
}, (txt.length*speed + 500));

$('.home__popup__next').click(function(){
    $('.home__popup').fadeOut()

})
$('.home__popup__skip').click(function(){
    $('.home__popup').fadeOut()
})


typeWriter()



