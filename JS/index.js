const menu = document.getElementById('menu');
const listaMenu = document.getElementById('lista-menu');
const body = document.querySelector('body');

menu.addEventListener('click', () => {
    console.log('clicked');
    listaMenu.classList.toggle('show');
    body.classList.toggle('overflow');
})

console.log("holis Node");
