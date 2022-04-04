$(document).ready(function () {
  
    $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 200000,
      from: 0,
      to: 100000,
    });

    const button = document.querySelectorAll('.search__block-title')
    const open = document.querySelectorAll('.search__block-list')
    let filter = document.querySelector('.filter__filters-button')
    let containerFilter = document.querySelector('.search__section')
    let filterClose = document.querySelector('.search__filters-back')
    let link = document.querySelectorAll('.search__col')
    let click = document.querySelectorAll('.click')
  
    filter.addEventListener('click', function () {
      containerFilter.classList.add('active__container')
    })
    filterClose.addEventListener('click', function () {
      containerFilter.classList.remove('active__container')
    })

    for( let i = 0; i < link.length; i++ ) {
      link[i].addEventListener('click', function () {
        click[i].click()
      })
    }

    for( let i = 0; i < 7; i++ ) {
            button[i].addEventListener('click', function () {
                open[i].classList.toggle('active')
                button[i].classList.toggle('search__block-title-after')
            })
    }

        const searchSwiper = new Swiper('.search-swiper', {
          // Optional parameters
          direction: 'horizontal',
          loop: true,
        
          // If we need pagination
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // type: 'fraction',
            // renderFraction: function (currentClass, totalClass) {
            //   return '<span class="' + currentClass + '"></span>' +
            //           ' ... ' +
            //           '<span class="' + totalClass + '"></span>';
            // },
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + "</span>"
            },
          },
        
          // Navigation arrows
          navigation: {
            nextEl: '.search-swiper-button-next',
            prevEl: '.search-swiper-button-prev',
          },
        });
  });