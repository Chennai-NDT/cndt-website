const navigation=document.querySelector(".primary-nav");
const menu=document.querySelector(".nav-toggle");
const menuIcon=document.querySelector("#menu-icon");

menu.addEventListener("click",()=>{
    const visibility= navigation.getAttribute('data-visible');
    if(visibility==="false"){
        navigation.setAttribute("data-visible",true);
        menuIcon.src="./images/close.png";
    }else{  
        navigation.setAttribute("data-visible",false);
        menuIcon.src="./images/menu.png";
    }
})

document.getElementById('logo').addEventListener('click',()=>{
    location.href="http://chennaindt.in";
  });
  const navHeight= document.querySelector('nav').getBoundingClientRect().height;
  document.querySelector('body').style.marginTop=navHeight+"px";
  console.log(navHeight);
window.onresize=function() {
    const navHeight= document.querySelector('nav').getBoundingClientRect().height;
    document.querySelector('body').style.marginTop=navHeight+"px";
    console.log(navHeight);
}

var marker = document.querySelector('#marker');
var item=document.querySelectorAll('.primary-nav a');

function indicator(e){
    marker.style.left=e.offsetLeft+'px';
    marker.style.width=e.offsetLeft+'px';
}
item.forEach(element => {
    element.addEventListener('click',(e)=>{
        indicator(e.target);
    })
});