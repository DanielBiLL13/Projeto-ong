// Array para armazenar as necessidades
let needs = JSON.parse(localStorage.getItem('needs')) || [];

// Controle de carregamento melhorado
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const loadingPage = document.getElementById('loadingPage');
        const homePage = document.getElementById('homePage');
        
        loadingPage.classList.add('hidden');
        
        loadingPage.addEventListener('transitionend', function() {
            loadingPage.style.display = 'none';
            homePage.classList.add('active');
        });
    }, 3000);
});
