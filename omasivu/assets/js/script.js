let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  header.classList.toggle('fa-active');
}

window.onscroll = () => {
  menu.classList.remove('fa-time')
  header.classList.remove('active')
}