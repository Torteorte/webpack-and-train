const burgerNav = document.querySelector('.burger-nav');
const navList = document.querySelector('.side-nav');

function toggleBurger() {
   burgerNav.classList.toggle('open');
   navList.classList.toggle("hidden-nav");
}

burgerNav.addEventListener('click', function (e) {
   e.preventDefault();
   toggleBurger();
})

document.addEventListener('click', function (event) {
   const target = event.target;
   const its_menu = target === burgerNav || burgerNav.contains(target);
   const its_btnMenu = target === navList;
   const menu_is_active = burgerNav.classList.contains('open');

   if (!its_menu && !its_btnMenu && menu_is_active) {
      toggleBurger(event);
   }
})

const buttonsMenus = document.querySelectorAll('.info-button');
const searhLabel = document.querySelector('.button-for-search').querySelector('label');
searhLabel.onclick = function () {
   search.classList.toggle('open')
}

for (const button of buttonsMenus) {
   const infoContainer = button.closest('li').querySelector('.info-container')

   button.addEventListener('click', toggleMenu)

   function toggleMenu() {
      button.classList.toggle('active-drop')
      if (button.firstChild === searhLabel) { return }
      else { infoContainer.classList.toggle('open') }

   }

   document.addEventListener('click', function (event) {
      const target = event.target
      const its_menu = target === button || button.contains(target)
      const its_btnMenu = target.closest(".info-container") === infoContainer
      const menu_is_active = button.classList.contains('active-drop')

      if (!its_menu && !its_btnMenu && menu_is_active) {
         toggleMenu()
      }
   })
}

const formSearch = document.querySelector('.header-form');
const inputSearch = formSearch.querySelector('.header-search-input');
const visibleDiv = formSearch.querySelector('.search-container');

formSearch.addEventListener('focus', function () {
   visibleDiv.classList.add('visible')
}, true)

document.addEventListener('click', function (event) {
   if (event.target.closest(".search-container") === visibleDiv || event.target === inputSearch) return
   visibleDiv.classList.remove('visible')
})