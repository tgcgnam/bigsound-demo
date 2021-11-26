let buyBtns = document.querySelectorAll('.btn-see-detail')
let modalTechnical = document.querySelector('.modal-technical')
let modalClose = document.querySelector('.modal-close')
let modalContainer = document.querySelector('#modal-container')

for (let buyBtn of buyBtns) {
    buyBtn.addEventListener('click', function() {
        modalTechnical.classList.add("open");
    })
};

function delLete() {
    modalTechnical.classList.remove("open");
};

modalClose.addEventListener('click', delLete);
modalTechnical.addEventListener('click', delLete);
modalContainer.addEventListener('click', function(ev) {
    ev.stopPropagation();
});
//
let menuItem = document.querySelector("#menu-item");
menuItem.style.maxHeight = "0px";

function MenuToggle() {
    if (menuItem.style.maxHeight == "0px") {
        menuItem.style.maxHeight = "200px"
    } else {
        menuItem.style.maxHeight = "0px"
    }
}