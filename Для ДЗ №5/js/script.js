let menuItems = document.querySelectorAll('.menu-item'),
    userFeedback = document.getElementById("prompt"),
    column = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv'),
    title = document.querySelector('.title'),
   
    menu = document.querySelector('.menu');


let menuItem = document.createElement('li');
menuItem.classList.add('menu-item');
menu.appendChild(menuItem);
column[1].removeChild(adv);
document.body.style.background = "url(../img/apple_true.jpg)";




menuItems[1].textContent = "Второй пункт";
menuItems[2].textContent = "Третий пункт";
menuItem.textContent = "Пятый пункт";
title.textContent = "Мы продаем только подлинную технику Apple";


userFeedback.textContent = prompt("Что вы думаете про технику Apple?", '');