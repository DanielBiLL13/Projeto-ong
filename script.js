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
// Função para alternar entre páginas
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    if (pageId === 'visualizacaoPage') {
        displayNeeds(needs);
    }
}