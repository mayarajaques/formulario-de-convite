
  // Função para atualizar o texto quando o arquivo é selecionado
  newFunction();

function newFunction() {
  document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById('file');
    const fileTextElement = document.querySelector('.file-text');
  
    fileInput.addEventListener('change', function () {
      const fileName = this.files[0] ? this.files[0].name : "Nenhum arquivo selecionado";
  
      // Atualiza o conteúdo do elemento de texto do arquivo
      fileTextElement.textContent = fileName;
    });
  });

}
