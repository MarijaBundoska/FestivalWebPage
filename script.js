function showSidebar(){
  const sidebar=document.querySelector('.sidebar')
  sidebar.style.display='flex';
}
function hideSidebar(){
  const sidebar=document.querySelector('.sidebar')
  sidebar.style.display='none';
}

const navLinkEls=document.querySelectorAll('.nav_link');
const sectionEls=document.querySelectorAll('.section');

let currentSection='home';
window.addEventListener('scroll',()=>{
  sectionEls.forEach(sectionEl=>{
    if(window.scrollY >= sectionEl.offsetTop){
      currentSection=sectionEl.id;
    }
  });

  navLinkEls.forEach(navLinkEl=>{
    if(navLinkEl.href.includes(currentSection)){
      navLinkEl.classList.add('active');
    }
  });
});


var swiper= new Swiper(".swiper",{
  effect:"coverflow",
  grabCursor:true,
  centeredSlides:true,
  initialSlide:2,
  speed:600,
  preventClicks:true,
  slidesPerView:"auto",
  coverflowEffect:{
    rotate:0,
    stretch:80,
    depth:350,
    modifier:1,
    slideShadows:true,
  },
  on:{
    click(event){
      swiper.slideTo(this.clickedIndex);
    },
  },
  pagination:{
    el:".swiper-pagination",
  },
});


document.querySelectorAll('.nav-link').forEach(link => {
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'page')
  }
})
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
