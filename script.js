let btn = document.querySelector('#toggle-button');
let sidebar = document.querySelector('.sidebar');

btn.onclick = function() {
    sidebar.classList.toggle('active');
}