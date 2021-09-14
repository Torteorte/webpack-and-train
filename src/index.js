require('normalize.css/normalize.css');

import './components/header/header.js'
import './components/header/dropDown.js';
import './scss/app.scss';

import lamaImage from './assets/alpaka.png';

const userAlexLogin = "567@mail.deu";
const userAlexPassword = "456";

const form = document.querySelector('#login-form');
const email = document.querySelector('#login-email');
const password = document.querySelector('#login-password');
const invalidTextEmail = document.querySelector('.validate-email');
const invalidTextPassword = document.querySelector('.validate-password');

if (form) {
   form.addEventListener('submit', function (event) {
      event.preventDefault();
      invalidTextEmail.textContent = '';
      invalidTextPassword.textContent = '';

      inputLogin(event);

      if (!email.validity.valid) {
         showError();
      }
   });
}

function showError() {
   if (email.validity.valueMissing) {
      invalidTextEmail.textContent = 'Введите email адрес';
   } else if (email.validity.typeMismatch) {
      invalidTextEmail.textContent = 'Это поле не является email адресом';
   }
}

function inputLogin(event) {
   const emailValue = email.value;
   const passwordValue = password.value;

   email.classList.remove("invalid");
   password.classList.remove("invalid");

   if (emailValue !== userAlexLogin) {
      invalidTextEmail.textContent = 'Неверный email';
      email.classList.add("invalid");
   } else if (passwordValue !== userAlexPassword) {
      invalidTextPassword.textContent = 'Неверный пароль';
      password.classList.add("invalid");
   } else {
      localStorage.setItem('userName', 'Alex');
      localStorage.setItem('userLogin', `${emailValue}`);

      document.location = './index.html';
   }
}

const achievementsTime = document.querySelector("#achievements-time")

let dateNow = new Date()

if (achievementsTime) {
   achievementsTime.textContent = `Время ${formatDate(dateNow)}`
}

function formatDate(date) {

   let hours = date.getHours();
   if (hours < 10) hours = '0' + hours;

   let minutes = date.getMinutes();
   if (minutes < 10) minutes = '0' + minutes;

   return `${hours}:${minutes}`
}

const exitsUser = document.querySelectorAll('.exitUser');

if (exitsUser) {
   for (const exit of exitsUser) {
      exit.addEventListener('click', function(e) {
         event.preventDefault()
         localStorage.clear();
         document.location.href = './index.html';
      })
   }
}