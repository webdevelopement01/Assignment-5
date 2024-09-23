/**Responsive navbar design  */
const menuBtn = document.getElementById('menu-btn');
const mobileBtn = document.getElementById('mobile-scren-menu-btn');

menuBtn.addEventListener('click',()=>{
mobileBtn.classList.toggle('hidden')

})

