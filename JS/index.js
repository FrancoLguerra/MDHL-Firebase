const menu = document.getElementById('menu');
const listaMenu = document.getElementById('lista-menu');

menu.addEventListener('click', () => {
    console.log('clicked');
    listaMenu.classList.toggle('show');
})
