console.log('gh')
const toggle = document.querySelector('.nav-toggle');
const navlink = document.querySelectorAll('.nav-link');
toggle.addEventListener("click",cross);
function cross(){
  document.body.classList.toggle('nav-open');
}
navlink.forEach((link) => {
  link.addEventListener("click",() => {
    document.body.classList.remove('nav-open');
  })
})
