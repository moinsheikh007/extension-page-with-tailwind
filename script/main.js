const menubar = document.getElementById('menuBar');
const navbar = document.getElementById('navbar');

menubar.addEventListener('click', function () {
    navbar.classList.toggle('hidden')
})