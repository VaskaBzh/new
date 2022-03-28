document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){

    const firstSwiper = new Swiper('.first-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.first-swiper-button-next',
          prevEl: '.first-swiper-button-prev',
        },
      });
      const feedbackSwiper = new Swiper('.feedback-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.feedback-swiper-button-next',
          prevEl: '.feedback-swiper-button-prev',
        },
      });
});