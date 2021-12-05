let btn_see = document.querySelector('.btn-see')
let block_content = document.querySelector('.block-content')
let btn_see_position = document.querySelector('.btn-see-position')

btn_see.addEventListener('click', function() {
    console.log("object");
    block_content.classList.remove('hide_content')
    btn_see_position.style.display = 'none'
})