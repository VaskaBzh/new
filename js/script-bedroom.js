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
    let buttonApply = document.querySelector('.search__block-apply')
    let body = document.querySelector('body')
    let handleFrom = document.querySelector('.from')
    let handleTo = document.querySelector('.to')
    let from = document.querySelector('.irs-from')
    let to = document.querySelector('.irs-to')
    let inputFrom = document.getElementById('searchFrom')
    let inputTo = document.getElementById('searchTo')

    const sliderBlockNav = document.querySelector('.search-swiper__nav')
    const slides = document.querySelectorAll('.swiper-slide')
    const dots = document.querySelectorAll('.swiper-pagination-bullet')

    let currentSlide = 0


    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    nextSlide(slides, 0, 'swiper-slide-active')
    nextSlide(dots, 0, 'swiper-pagination-bullet-active')

    sliderBlockNav.addEventListener('click', (e) => {

        if (!e.target.matches('.swiper-pagination-bullet, .swiper-button-next, .swiper-button-prev')) {
            return
        }

        prevSlide(slides, currentSlide, 'swiper-slide-active')
        prevSlide(dots, currentSlide, 'swiper-pagination-bullet-active')

        if (e.target.matches('.swiper-button-next')) {
            currentSlide++
        } else if (e.target.matches('.swiper-button-prev')) {
            currentSlide--
        } else if (e.target.classList.contains('swiper-pagination-bullet')) {
            dots.forEach((dot, index) => {
                if (e.target === dot && e.target.textContent <= 5) {
                  e.preventDefault()
                  currentSlide = index
                }
            })
        }

        if (currentSlide >= slides.length) {
            document.getElementById('next').click()
        }

        if (currentSlide < 0) {
          document.getElementById('final').click()
        }

        nextSlide(slides, currentSlide, 'swiper-slide-active')
        nextSlide(dots, currentSlide, 'swiper-pagination-bullet-active')

    })
    

    const inputStart = function () {
      inputTo.value = to.textContent
      inputFrom.value = from.textContent
    }

    handleFrom.addEventListener('mousemove', () => {
      inputFrom.value = from.textContent
    })

    handleTo.addEventListener('mousemove', () => {
      inputTo.value = to.textContent
    })
    handleFrom.addEventListener('mouseout', () => {
      inputFrom.value = from.textContent
    })
    handleTo.addEventListener('mouseout', () => {
      inputTo.value = to.textContent
    })
  
    filter.addEventListener('click', function () {
      containerFilter.classList.add('active__container')
      body.classList.add('no-scroll')
      buttonApply.classList.add('active__container')
    })

    filterClose.addEventListener('click', function () {
      containerFilter.classList.remove('active__container')
      body.classList.remove('no-scroll')
      buttonApply.classList.remove('active__container')
    })
    for( let i = 0; i < 7; i++ ) {
            button[i].addEventListener('click', function () {
                open[i].classList.toggle('active')
                button[i].classList.toggle('search__block-title-after')
            })
    }

      inputStart()
  });