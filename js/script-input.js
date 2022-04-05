$(document).ready(function () {
  let input = document.querySelector('.card__col-input')
  let inputPlus = document.querySelector('.card__col-plus')
  let inputMinus = document.querySelector('.card__col-minus')

  input.value = 1
  inputPlus.addEventListener('click', function () {
    input.value = +input.value + 1
  })
  inputMinus.addEventListener('click', function () {
    if (input.value > 0) {
      input.value = +input.value - 1
    }
  })
});