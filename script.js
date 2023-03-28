const hamburgerMenu = document.getElementById('menu')
const sidebar = document.querySelector('.sidebar')
const exit = document.getElementById('exit')

hamburgerMenu.addEventListener('click', function(){
if(sidebar.classList.contains('show-sidebar')){
    sidebar.classList.remove('show-sidebar')
}
else{
    sidebar.classList.add('show-sidebar')
}
})

exit.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar') 
})