var arrow = document.querySelector('.arrow');
var search = document.querySelector('.search-icon');

function show(){
    var menu_left = document.querySelector('.menu_left_show');
    var nav_left = document.querySelector('.nav_left');
    menu_left.classList.replace('menu_left_show', 'menu_left_hidden');
    nav_left.classList.toggle('hidden');
}

function toggleShow(){
    var input = document.querySelector('.search input');
    input.classList.toggle('hidden');
}

search.onclick = toggleShow;
arrow.onclick = show;

//testowa linia