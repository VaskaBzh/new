$(document).ready(function () {
    let cards = document.querySelectorAll('.action__col')
    let links = document.querySelectorAll('#card-link')

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            links[index].click()
        })
    })
  });