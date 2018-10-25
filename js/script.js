$(document).ready(function(e){

    var swiper = new Swiper('.insta-carousel', {
        slidesPerView: 5,
        centeredSlides: true,
        spaceBetween: 0,
        initialSlide: 3,
        loop: true,
        // init: false,
        scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          }
        }
      });
});