document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){

  let firstTitle = document.getElementById('first')
  let firstList = document.getElementById('first-list')
  let secondTitle = document.getElementById('second')
  let secondList = document.getElementById('second-list')
  let thirdTitle = document.getElementById('third')
  let thirdList = document.getElementById('third-list')

  firstTitle.addEventListener('click', function () {
    firstList.classList.toggle('active')
  })
  secondTitle.addEventListener('click', function () {
    secondList.classList.toggle('active')
  })
  thirdTitle.addEventListener('click', function () {
    thirdList.classList.toggle('active')
  })

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
      const actionSwiper = new Swiper('.action-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        spaceBetween: 8,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.action-swiper-button-next',
          prevEl: '.action-swiper-button-prev',
        },
      });
});