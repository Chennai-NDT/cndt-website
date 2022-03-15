const navigation=document.querySelector(".primary-nav");
const menu=document.querySelector(".nav-toggle");
const menuIcon=document.querySelector("#menu-icon");

menu.addEventListener("click",()=>{
    const visibility= navigation.getAttribute('data-visible');
    console.log(visibility);
    if(visibility==="false"){
        navigation.setAttribute("data-visible",true);
        menuIcon.src="./images/close.png";
    }else{  
        navigation.setAttribute("data-visible",false);
        menuIcon.src="./images/menu.png";
    }
})