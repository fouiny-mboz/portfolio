const allNavItems = document.querySelectorAll('.nav-item');
const navbar = document.querySelectorAll('.navbar-collapse');

allNavItems.forEach(item => addEventListener('click', () => {
    navbar.classList.toggle('show');
}))