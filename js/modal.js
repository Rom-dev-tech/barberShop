(() => {
const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
};

      refs.openModalBtn.addEventListener('click', toggleModal);
      refs.closeModalBtn.addEventListener('click', toggleModal);

      function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
}
})();

//Вторая кнопка 
(() => {
      const refs = {
            openModalBtn: document.querySelector('[data-modal-open-about]'),
            closeModalBtn: document.querySelector('[data-modal-close-about]'),
            modal: document.querySelector('[data-modal]'),
      };
      
            refs.openModalBtn.addEventListener('click', toggleModal);
            refs.closeModalBtn.addEventListener('click', toggleModal);
      
            function toggleModal() {
            refs.modal.classList.toggle('is-hidden');
      }
      })();

      //Третья кнопка
      (() => {
            const refs = {
                  openModalBtn: document.querySelector('[data-modal-open-serv]'),
                  closeModalBtn: document.querySelector('[data-modal-close-serv]'),
                  modal: document.querySelector('[data-modal]'),
            };
            
                  refs.openModalBtn.addEventListener('click', toggleModal);
                  refs.closeModalBtn.addEventListener('click', toggleModal);
            
                  function toggleModal() {
                  refs.modal.classList.toggle('is-hidden');
            }
            })();

