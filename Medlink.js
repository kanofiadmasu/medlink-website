 const toggleMenu = document.querySelector('.toggle-menu');
 const navLists = document.getElementsByClassName('nav-lists')[0];

 toggleMenu.addEventListener('click', () => {
    navLists.classList.toggle('active')
 })
 
// Accordion javascript

const accrodion = document.getElementsByClassName('tab');

for(i=0; i < accrodion.length; i++) {
    accrodion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}