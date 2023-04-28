/*
const modal = document.querySelector('.popup-wrapper');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
*/

// Seleciona todos os botões de fechar
const btnsFechar = document.querySelectorAll('.fechar-popup');

// Adiciona um evento de clique em cada botão de fechar
btnsFechar.forEach(btnFechar => {
  btnFechar.addEventListener('click', () => {
    // Fecha a popup pai
    const popup = btnFechar.parentElement.parentElement;
    popup.style.display = 'none';
  });
});

// Adiciona um evento de clique em cada botão de abrir
const btnsAbrir = document.querySelectorAll('.abrir-popup');
btnsAbrir.forEach(btnAbrir => {
  btnAbrir.addEventListener('click', () => {
    // Abre a popup pai
    const popup = btnAbrir.parentElement.querySelector('.popup');
    popup.style.display = 'block';
  });
});
