const toggle = document.querySelector('.toggle-btn');
const body = document.querySelector('body');
const menuBtn = document.querySelector('.menu-btn');
const dashboard = document.querySelector('.dashboard');

toggle.addEventListener('click', () => {
    toggle.toggleAttribute('dark');
    body.toggleAttribute('dark');
})

menuBtn.addEventListener('click', () => {
    dashboard.setAttribute('visible','');
})
