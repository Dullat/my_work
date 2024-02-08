const toggle = document.querySelector('.toggle-btn');
const body = document.querySelector('body');
const menuBtn = document.querySelector('.menu-btn');
const dashboard = document.querySelector('.dashboard');
const overlay = document.querySelector('i');

toggle.addEventListener('click', () => {
    toggle.toggleAttribute('dark');
    body.toggleAttribute('dark');
})

menuBtn.addEventListener('click', () => {
    dashboard.setAttribute('visible','');
    overlay.setAttribute('visible','')
    document.body.style.overflow = 'hidden';
})

document.addEventListener('click', (e) => {
    if((e.target !== dashboard) && (e.target !== menuBtn)){
        dashboard.removeAttribute('visible');
        overlay.removeAttribute('visible');
        document.body.style.overflow = '';
    }
})
