const navMenu = document.querySelector('.nav_menu')
const burger = document.querySelector('#burger')
const burgerImg = document.querySelector('.burger-img')
burger.addEventListener('click', () => {
  if (navMenu.classList.toggle('active')) {
    burgerImg.src = './img/cancel.png'
    burger.classList.add('fixed')
  } else {
    burgerImg.src = './img/burger.png'
    burger.classList.remove('fixed')
  }
})
