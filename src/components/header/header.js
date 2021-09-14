function changeHeaderUser() {
   const header = document.querySelector('header')
   const headerContainer = document.querySelector('.header-container').classList.add('user-header-container')
   const logiLinks = document.querySelector('.login-links').remove()

   const products = `
      <ul class="products">
         <li class="info-button-dropdown">
            <button class="info-button">Products</button>
            <div class="info-container">
               <ul>
                  <li><a href="#">
                     <h4>Stack Overflow</h4>
                     <p>Public questions & answers</p>
                  </a></li>
                  <li><a href="#">
                     <h4>Stack Overflow for Teams</h4>
                     <p>Where developers & technologists share private knowledge with coworkers</p>
                  </a></li>
                  <li><a href="#">
                     <h4>Jobs</h4>
                     <p>Programming & related technical career opportunities</p>
                  </a></li>
                  <li><a href="#">
                     <h4>Talent</h4>
                     <p>Recruit tech talent & build your employer brand</p>
                  </a></li>
                  <li><a href="#">
                     <h4>Advertising</h4>
                     <p>Reach developers &amp; technologists worldwide</p>
                  </a></li>
                  <li class="about-company"><a href="#">
                     <p>About the company</p>
                  </a></li>
               </ul>
            </div>
         </li>
      </ul>
   `
   const messages = `
         <h3>Входящие <span><a href="#">все сообщения</a></span></h3>
         <ul>
            <li><a href="#">
               <h4>Добро пожаловать <span>5 часов назада</span></h4>
               <p> Добро пожаловать на сайт «Stack Overflow на русском»! Совершите двухминутный тур, чтобы заработать свой первый знак.
               </p>
               <svg aria-hidden="true" class="native svg-icon iconLogoGlyphMd" width="20" height="20" viewBox="0 0 32 37">
                  <path d="M26 33v-9h4v13H0V24h4v9h22z" fill="#BCBBBB"></path>
                  <path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0zM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99zM23 30H7v-3h16v3z" fill="#F48024"></path>
               </svg>
            </a></li>
            <li><a href="#">
               <p>посмотреть все входящие</p>
            </a></li>
         </ul>
   `
   const achievments = `
         <h3>Достижения <time id="achievements-time"></time> <span><a href="#">привелегии</a> &#183; <a href="#">все знаки</a></span></h3>
         <p>Вы ещё не сделали каких-либо достижений.</p>
         <p>Хотите <a href="#">совершить тур</a> или <a href="#">заполнить профиль?</a></p>
   `
   const userShortInfo = `
        <li class="user-avatar"><a id='avatar' href="#">
            <img title="Alex" src="https://image.flaticon.com/icons/png/512/371/371873.png" alt="user avatar">
            <p>1</p>
        </a></li>
   `
   const userShortInfoInMenu = `
    <li class="user-in-menu">
         <div class="user-container">
            <img src="https://image.flaticon.com/icons/png/512/371/371873.png" alt="user-avatar">
            <div>
               <h4><a href="#">${localStorage.getItem('userName')}</a></h4>
               <p>1</p>
            </div>
            <span><a href="#" class="exitUser">выйти</a></span>
         </div>
    </li>
   `
   const userClose = `
        <a href="#" class="exitUser">выйти</a>
   `

   const mainLogoImg = document.querySelector('.main-logo-img').insertAdjacentHTML("afterend", products)
   const userMessages = document.querySelector('#userMessages')
   userMessages.innerHTML = ""
   userMessages.className = "info-container info-login-user"
   userMessages.insertAdjacentHTML("afterbegin", messages)

   const userAchievements = document.querySelector('#userAchievements')
   userAchievements.innerHTML = ""
   userAchievements.className = "info-container info-login-user"
   userAchievements.insertAdjacentHTML("afterbegin", achievments)

   const infoDropdown = document.querySelectorAll('.info-button-dropdown')[2]
   infoDropdown.insertAdjacentHTML("beforebegin", userShortInfo)

   const thisgroup = document.querySelector('.this-group ').insertAdjacentHTML("afterbegin", userShortInfoInMenu)
   const shortUserNavigation = document.querySelector('#shortUserNavigation').insertAdjacentHTML("beforeend", userClose)
}

if (localStorage.getItem('userLogin')) {
   changeHeaderUser()
}

// const d = `
//    <div class="header-container user-header-container">
//          <div class='main-logo-img'>
//             <a class="burger-nav index-burger-nav" href="#" tabindex="1">
//             <span class="burger">Drop-down menu</span>
//             </a>
//             <a class="logo-img" href="./index.html" target="_self"><span>Main logo</span></a>
//          </div>
//
//          ${products}
//
//          <form class="header-form" action="#">
//              <input class="grey-input header-search-input" type="text" placeholder="Поиск..." name="search" id="search">
//              <label for="search"></label>
//              <svg aria-hidden="true" class="input-icon-search" width="18" height="18" viewBox="0 0 18 18">
//                  <path d="m18 16.5-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z"></path>
//              </svg>
//              <div class="search-container">
//                 <div>
//                     <ul>
//                         <li><span>[метка]</span> поиск по метке</li>
//                         <li><span>user:1234</span> поиск по автору</li>
//                         <li><span>"слова в кавычках"</span> точная фраза</li>
//                     </ul>
//                     <ul>
//                         <li><span>answers:0</span> неотвеченные вопросы</li>
//                         <li><span>score:3</span> сообщения с рейтингом 3+</li>
//                         <li><span>isaccepted:yes</span> поиск по статусу</li>
//                     </ul>
//                </div>
//                <div>
//                   <a class='grey-color-button' href="#">Задать вопрос</a>
//                   <a href="#">Справка по поиску</a>
//                </div>
//             </div>
//         </form>
//
//          <div class="header-buttons">
//              <ul class="info-buttons">
//          <li class="info-button-dropdown">
//             <button class="info-button button-for-search"><label for="search">Поиск
//                <svg aria-hidden="true" class="input-icon-search" width="18" height="18" viewBox="0 0 18 18">
//                   <path d="m18 16.5-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z"></path>
//                </svg>
//             </label></button>
//          </li>
//          <li class="user-avatar"><a id='avatar' href="#">
//             <img title="Alex" src="https://image.flaticon.com/icons/png/512/371/371873.png" alt="">
//                <p>1</p>
//          </a></li>
//          <li class="info-button-dropdown" title="Последние входящие сообщения">
//             <button class="info-button">Последние входящие сообщения
//                <svg aria-hidden="true" class="svg-icon iconInbox" width="20" height="18" viewBox="0 0 20 18">
//                   <path d="M4.63 1h10.56a2 2 0 011.94 1.35L20 10.79V15a2 2 0 01-2 2H2a2 2 0 01-2-2v-4.21l2.78-8.44c.25-.8 1-1.36 1.85-1.35zm8.28 12 2-2h2.95l-2.44-7.32a1 1 0 00-.95-.68H5.35a1 1 0 00-.95.68L1.96 11h2.95l2 2h6z"></path>
//                </svg>
//             </button>
//             <div class="info-container info-login-user">
//                <h3>Входящие <span><a href="#">все сообщения</a></span></h3>
//                <ul>
//                   <li><a href="#">
//                      <h4>Добро пожаловать <span>5 часов назада</span></h4>
//                      <p> Добро пожаловать на сайт «Stack Overflow на русском»! Совершите двухминутный тур, чтобы заработать свой первый знак.
//                      </p>
//                      <svg aria-hidden="true" class="native svg-icon iconLogoGlyphMd" width="20" height="20" viewBox="0 0 32 37">
//                         <path d="M26 33v-9h4v13H0V24h4v9h22z" fill="#BCBBBB"></path>
//                         <path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0zM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99zM23 30H7v-3h16v3z" fill="#F48024"></path>
//                      </svg>
//                   </a></li>
//                   <li><a href="#">
//                      <p>посмотреть все входящие</p>
//                   </a></li>
//                </ul>
//
//             </div>
//          </li>
//          <li class="info-button-dropdown" title="Последние достижения: репутация, знаки и привелегии">
//             <button class="info-button">Последние достижения: репутация, знаки и привелегии
//                <svg aria-hidden="true" class="svg-icon iconAchievements" width="18" height="18" viewBox="0 0 18 18">
//                   <path d="M15 2V1H3v1H0v4c0 1.6 1.4 3 3 3v1c.4 1.5 3 2.6 5 3v2H5s-1 1.5-1 2h10c0-.4-1-2-1-2h-3v-2c2-.4 4.6-1.5 5-3V9c1.6-.2 3-1.4 3-3V2h-3zM3 7c-.5 0-1-.5-1-1V4h1v3zm8.4 2.5L9 8 6.6 9.4l1-2.7L5 5h3l1-2.7L10 5h2.8l-2.3 1.8 1 2.7h-.1zM16 6c0 .5-.5 1-1 1V4h1v2z"></path>
//                </svg>
//             </button>
//             <div class="info-container info-login-user">
//                <h3>Достижения <time id="achievements-time"></time> <span><a href="#">привелегии</a> &#183; <a href="#">все знаки</a></span></h3>
//                <p>Вы ещё не сделали каких-либо достижений.</p>
//                <p>Хотите <a href="#">совершить тур</a> или <a href="#">заполнить профиль?</a></p>
//             </div>
//          </li>
//          <li class="info-button-dropdown" title="Справка и прочие ресурсы">
//             <button class="info-button">Справка и прочие ресурсы
//                <svg aria-hidden="true" class="svg-icon iconHelp" width="18" height="18" viewBox="0 0 18 18">
//                   <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23zM11.77 8c-.59.66-1.78 1.09-2.05 1.97a4 4 0 00-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.06-1.35.66-2.2 1.83-2.88.39-.29.7-.75.7-1.24.01-1.24-1.64-1.82-2.35-.72-.21.33-.18.73-.18 1.1H5.75c0-1.97 1.03-3.26 3.03-3.26 1.75 0 3.47.87 3.47 2.83 0 .57-.2 1.05-.48 1.44z"></path>
//                </svg>
//             </button>
//             <div class="info-container info-help">
//                <ul class="info-list">
//                   <li class="info-item"><a href="#">
//                      <h4>Тур</h4>
//                      <p>Начните с этой страницы, чтобы быстро ознакомиться с сайтом</p>
//                   </a></li>
//                   <li class="info-item"><a href="#">
//                      <h4>Справка</h4>
//                      <p>Подробные ответы на любые возможные вопросы</p>
//                   </a></li>
//                   <li class="info-item"><a href="#">
//                      <h4>Мета</h4>
//                      <p>Обсудить принципы работы и политику сайта</p>
//                   </a></li>
//                   <li class="info-item"><a href="#">
//                      <h4>О нас</h4>
//                      <p>Узнать больше о компании Stack Overflow</p>
//                   </a></li>
//                   <li class="info-item"><a href="#">
//                      <h4>Бизнес</h4>
//                      <p>Узнать больше о поиске разработчиков или рекламе на сайте</p>
//                   </a></li>
//                </ul>
//             </div>
// //          </li>
//          <li class="info-button-dropdown" title="Список всех сайтов Stack Exchange (178 сайтов)">
//             <button class="info-button">Список всех сайтов Stack Exchange
//                <svg aria-hidden="true" class="svg-icon iconStackExchange" width="18" height="18" viewBox="0 0 18 18">
//                   <path d="M15 1H3a2 2 0  00-2 2v2h16V3a2 2 0 00-2-2zM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2zm16-7H1v4h16V6z"></path>
//                </svg>
//             </button>
//             <div class="info-container info-login-user user-menu">
//                <h3><a href="#">ТЕКУЩЕЕ СООБЩЕСТВО</a> </h3>
//                <ul class="groups this-group">
//                   <li class="user-in-menu">
//                     <div class="user-container">
//                         <img src="https://image.flaticon.com/icons/png/512/371/371873.png" alt="user-avatar">
//                         <div>
//                             <h4><a href="#">${localStorage.getItem('userName')}</a></h4>
//                             <p>1</p>
//                         </div>
//                         <span><a href="#" class="exitUser">выйти</a></span>
//                     </div>
//                   </li>
//                   <li>
//                      <h4><a href="#">Stack Overflow на русском</a> <span><a href="#">справка</a> <a href="#">чат</a> <a href="#" class="exitUser">выйти</a></span></h4>
//                      <svg aria-hidden="true" class="native svg-icon iconLogoGlyphMd" width="14" height="14" viewBox="0 0 32 37">
//                         <path d="M26 33v-9h4v13H0V24h4v9h22z" fill="white"></path>
//                         <path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0zM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99zM23 30H7v-3h16v3z" fill="white"></path>
//                      </svg>
//                   </li>
//                   <li class="group-list-item"><a href="#">
//                      <p>Stack Overflow на русском Meta</p>
//                   </a></li>
//                </ul>
//                <h3><a href="#">ВАШИ СООБЩЕСТВО</a> <span><a href="#">править</a></span></h3>
//                <ul class="groups">
//                   <li><a href="#">
//                      <p>Stack Overflow на русском <span>1</span></p>
//                      <svg aria-hidden="true" class="native svg-icon iconLogoGlyphMd" width="14" height="14" viewBox="0 0 32 37">
//                         <path d="M26 33v-9h4v13H0V24h4v9h22z" fill="white"></path>
//                         <path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0zM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99zM23 30H7v-3h16v3z" fill="white"></path>
//                      </svg>
//                   </a></li>
//                </ul>
//                <h3><a href="#">ДРУГИЕ СООБЩЕСТВА STACK EXCHANGE</a> <span><a href="#">блог компании</a></span></h3>
//                <form>
//                   <label for="user-search"></label>
//                   <input class="grey-input" type="text" name="user-search" id="user-search" placeholder="Поиск сообщества Stack Exchange">
//                      <svg aria-hidden="true" class="input-icon-search" width="18" height="18" viewBox="0 0 18 18">
//                         <path d="m18 16.5-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z"></path>
//                      </svg>
//                </form>
//                <ul class="groups other-groups">
//                   <li class="other-group"><a href="#">
//                      <p>3D Printing</p>
//                      <p>For 3D printing enthusiasts</p>
//                   </a></li>
//                   <li class="other-group"><a href="#">
//                      <p>Academia</p>
//                      <p>For academics and those enrolled in higher education</p>
//                   </a></li>
//                   <li class="other-group"><a href="#">
//                      <p>Amateur Radio</p>
//                      <p>For amateur radio enthusiasts</p>
//                   </a></li>
//                   <li class="other-group"><a href="#">
//                      <p>Android Enthusiasts</p>
//                      <p>For enthusiasts and power users of the Android operating system</p>
//                   </a></li>
//                   <li class="other-group"><a href="#">
//                      <p>Anime & Manga</p>
//                      <p>For anime and manga fans</p>
//                   </a></li>
//                   <li class="other-group"><a href="#">
//                      <p>Arduino</p>
//                      <p>For developers of open-source hardware and software that is compatible with Arduino</p>
//                   </a></li>
//                </ul>
//             </div>
//          </li>
//       </ul>
//          </div>
//    </div>
// `

// header.insertAdjacentHTML("afterbegin", d)