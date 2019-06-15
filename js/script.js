$('.carousel__slick').slick({
    dots: false,
    initialSlide: 2,
    infinite: true,
    speed: 300,
    slidesToShow: 3.75,
    swipeToSlide: true,
    centerMode: true,
    
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2.5,
          centerMode: false,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }


    ]
  });

  document.querySelector(".header__cta__play").addEventListener('click', (e)=>{
    document.querySelector(".full--height").style.display = "none"
    document.querySelector(".yt-container").style.display = "block"
    document.querySelector(".header").style.backgroundImage = "none"
    document.querySelector(".header").style.height = "auto"

    // document.querySelector("#video").src+="&autoplay=1"
    e.preventDefault()
    if (window.matchMedia("(max-width: 1200px)").matches) {
      document.querySelector(".header").style.minHeight = "0"
      document.querySelector(".header").style.marginTop = "0"
      console.log('azd')

    }
    else{

      document.querySelector(".quote").style.marginBottom = "100px"

      document.querySelector(".header__overlay").style.top = "100%"
    }

  
  })