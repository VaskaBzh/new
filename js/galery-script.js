$(document).ready(function () {
    const galleryOpen = document.querySelectorAll('.card__content-pic')
    const gallery = document.querySelector('.shadow')
    const galleryContent = gallery.querySelector('.gallery .gallery__img')
    const galleryClose = gallery.querySelector('.gallery .gallery__close')

    galleryOpen.forEach((el, i) => {
        el.addEventListener('click', () => {
            let imgLink = el.getAttribute('src') 
            gallery.classList.add('active')
            galleryContent.setAttribute('src', imgLink)
        })
    })

    galleryClose.addEventListener('click', () => {
        gallery.classList.remove('active')
    })
  });