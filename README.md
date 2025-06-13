# Projeto-ong
🌟 Funcionalidades Principais
✅ Cadastro de Necessidades

Formulário completo com validação

Integração com ViaCEP para preenchimento automático de endereço

Armazenamento local (localStorage)

✅ Visualização Intuitiva

Cards organizados por tipo de ajuda

Filtros por categoria e busca por texto

Animações fluidas

✅ Experiência Moderna

Tela de carregamento animada

Transições suaves entre páginas

Design responsivo (mobile-friendly)

✅ Extras Úteis

Exclusão de registros com confirmação

Notificações toast (feedback visual)

Persistência de dados

🛠 Tecnologias Utilizadas

Frontend	Backend (simulado)

HTML5 Semântico	localStorage

CSS3 com Variáveis	Fetch API (ViaCEP)

JavaScript Moderno	

🎨 Estrutura do Código

📂 Arquivos Principais

markdown

├── index.html        # Estrutura principal (3 páginas em SPA)

├── styles.css        # Estilos globais + animações

└── script.js         # Lógica da aplicação

🌐 Páginas (SPA - Single Page Application)

loadingPage - Animação inicial

homePage - Apresentação + call-to-action

cadastroPage - Formulário para instituições

visualizacaoPage - Listagem dinâmica

🧠 Lógica-Chave

🔄 Sistema de Navegação

javascript

function showPage(pageId) {
    
  // Esconde todas as páginas

  document.querySelectorAll('.page').forEach(page => {

    page.classList.remove('active');

  });
  
  // Mostra a página selecionada

  document.getElementById(pageId).classList.add('active');

}
📦 Armazenamento de Dados

javascript

// Salva no localStorage

localStorage.setItem('needs', JSON.stringify(needs));

// Recupera dados

let needs = JSON.parse(localStorage.getItem('needs')) || [];

🔍 Filtro Avançado

Combina busca por texto + filtro por categoria:

javascript

needs.filter(need => {

  return need.title.includes(searchTerm) && 

         (selectedType ? need.type === selectedType : true);

});

🎯 Como Contribuir

Faça um fork do projeto

Crie uma branch (git checkout -b feature/incrivel)

Commit suas mudanças (git commit -m 'Add feature X')

Push para a branch (git push origin feature/incrivel)

Abra um Pull Request