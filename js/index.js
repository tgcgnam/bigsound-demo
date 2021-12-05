let buyBtns = document.querySelectorAll('.btn-see-detail')
let modalTechnical = document.querySelector('.modal-technical')
let modal_Close = document.querySelector('.modal-close')
let modalContainer = document.querySelector('#modal-container')

for (let buyBtn of buyBtns) {
    buyBtn.addEventListener('click', function() {
        modalTechnical.classList.add("open");
    })
};

modal_Close.addEventListener('click', function delLete(e) {
    modalTechnical.classList.remove("open");
});
modalTechnical.addEventListener('click', function delLete(e) {
    modalTechnical.classList.remove("open");
});
modalContainer.addEventListener('click', function(ev) {
    ev.stopPropagation();
});