const icons = document.querySelectorAll(`.icon`);

icons.forEach(item => {
   item.addEventListener(`mouseover`, e => {
      item.firstElementChild.classList.add(`hidden`);
      item.lastElementChild.classList.remove(`hidden`)
   })
   item.addEventListener(`mouseout`, e => {
      item.firstElementChild.classList.remove(`hidden`);
      item.lastElementChild.classList.add(`hidden`)
   })
})

const burger = document.querySelector(`.burger`),
   menu = document.querySelector(`.menu`);

burger.addEventListener(`click`, e => {
   burger.classList.toggle(`bg-myGreen`)
   menu.classList.toggle(`hidden`)
})

const buy = document.querySelector(`#buy`),
   popup = document.querySelector(`#popup`),
   close = document.querySelector(`#close`)

buy.addEventListener(`click`, e => {
   popup.classList.toggle(`hidden`)
})

close.addEventListener(`click`, e => {
   popup.classList.add(`hidden`)
})