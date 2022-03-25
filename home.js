$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

const faders = document.querySelectorAll("section");
const equipments=document.querySelectorAll(".equipment");
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
}
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("visible");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  equipments.forEach(equipment=>{
    appearOnScroll.observe(equipment);
  })


const nav=document.querySelector(".primary-nav");
  const links=document.querySelectorAll(".primary-nav a");
  links.forEach(link=>{
    link.addEventListener('click',()=>{
      nav.setAttribute("data-visible",false);
      menuIcon.src="./images/menu.png";
    })
  })