$(document).ready(function () {
    let dark = document.querySelector('.card__col-dark')
    let light = document.querySelector('.card__col-light')
    let red = document.querySelector('.card__col-primary')
    let grey = document.querySelector('.card__col-grey')
    let color = document.getElementById('color')
    let colorTwo = document.getElementById('color-two')
  
    let сolorSwitch = function(item) {
      item.addEventListener('click', function(){
        if (item == dark) {
          color.textContent = 'Черный'
          colorTwo.textContent = 'Черный'
        } else if (item == light) {
          color.textContent = 'Белый'
          colorTwo.textContent = 'Белый'
        } else if (item == red) {
          color.textContent = 'Красный'
          colorTwo.textContent = 'Красный'
        } else if (item == grey) {
          color.textContent = 'Серый'
          colorTwo.textContent = 'Серый'
        }
      })
    }
  
    сolorSwitch(dark)
    сolorSwitch(red)
    сolorSwitch(light)
    сolorSwitch(grey)
});
