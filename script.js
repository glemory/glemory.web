// Exemplo simples: alerta ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site carregado com sucesso!');
    
    // Adicionar funcionalidade ao formulário
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada (simulação)!');
        form.reset();
    });
});