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
// Validação do formulário de cadastro
document.getElementById('needForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
        const formData = {
            institutionName: document.getElementById('institutionName').value,
            helpType: document.getElementById('helpType').value,
            needTitle: document.getElementById('needTitle').value,
            needDescription: document.getElementById('needDescription').value,
            cep: document.getElementById('cep').value,
            street: document.getElementById('street').value,
            neighborhood: document.getElementById('neighborhood').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            contact: document.getElementById('contact').value,
            createdAt: new Date().toISOString()
        };
        
        needs.push(formData);
        localStorage.setItem('needs', JSON.stringify(needs));
        alert('Necessidade cadastrada com sucesso!');
        this.reset();
        showPage('visualizacaoPage');
    }
});
// Validação do formulário
function validateForm() {
    let isValid = true;

    
    return isValid;
}
// Integração com ViaCEP
document.getElementById('cep')?.addEventListener('blur', function() {
    const cep = this.value.replace(/\D/g, '');
    
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('street').value = data.logradouro;
                    document.getElementById('neighborhood').value = data.bairro;
                    document.getElementById('city').value = data.localidade;
                    document.getElementById('state').value = data.uf;
                } else {
                    alert('CEP não encontrado');
                }
            })
            .catch(error => {
                console.error('Erro ao buscar CEP:', error);
                alert('Erro ao buscar CEP. Tente novamente.');
            });
    }
});
