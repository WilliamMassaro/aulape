document.addEventListener('DOMContentLoaded', () => {
    // Animação ao carregar a página
    const introText = document.querySelector('#intro h1');
    introText.classList.add('fade-in');
  
    // Exibição de detalhes das características ao clicar
    const caracteristicasItems = document.querySelectorAll('.caracteristica');
    caracteristicasItems.forEach(item => {
      item.addEventListener('click', () => {
        // Alterna a visibilidade da descrição da característica
        const descricao = item.querySelector('.descricao');
        descricao.classList.toggle('mostrar');
      });
    });
  
    // Efeito de rolagem suave para links internos
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth'
        });
      });
    });
  });
  
  