// Seleciona o iframe
var iframe = document.querySelector('iframe');

// Adiciona um event listener para quando o iframe é carregado
iframe.addEventListener('load', function() {
  // Seleciona o elemento dentro do iframe que deseja modificar
  var element = iframe.contentDocument.querySelector('.df-messenger-message-text');

  // Modifica o elemento selecionado
  element.style.backgroundColor = 'white';
  element.style.color = 'blue';
});
