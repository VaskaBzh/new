document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){

    const firstSwiper = new Swiper('.first-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.first-swiper-button-next',
          prevEl: '.first-swiper-button-prev',
        },
      });
});