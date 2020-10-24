mainmenu = document.querySelector('.mainmenu')

burger = document.querySelector('.burger')

closeburger = document.querySelector('.closeburger')


burger.addEventListener('click' , () => {
    mainmenu.style.display = 'flex';
    mainmenu.style.top = '0';
})

closeburger.addEventListener('click' , () => {
    mainmenu.style.top = '-100%';
})

