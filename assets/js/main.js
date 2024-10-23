const menu = document.querySelector('.toggle-btn')
const sidebar = document.querySelector("#sidebar")
const nav = document.querySelector('.position-head')

menu.addEventListener("click", function(){
    sidebar.classList.toggle("expand")

    if (sidebar.classList.contains('expand')) {
        nav.classList.remove('sidebar-collapsed')
        nav.classList.add('sidebar-expanded')
    } else {
        nav.classList.remove('sidebar-expanded')
        nav.classList.add('sidebar-collapsed')
    }
})