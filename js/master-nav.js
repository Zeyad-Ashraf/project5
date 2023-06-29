// // select all bullets
const allBullets=document.querySelectorAll(".nav-bullets .bullet");
// select all links
const allLinks=document.querySelectorAll(" .links a");
// create function to do the scroll we need to use it more than one
function scrollToSections(elements){
    elements.forEach(ele=>{
        ele.addEventListener("click",(e)=>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:'smooth'
            });
        });
    });
}
// calling function for bullets
scrollToSections(allBullets);
// calling function for links
scrollToSections(allLinks);

//toggle menu
//select toggle-menu
let  toggleBtn=document.querySelector(".toggle-menu");
//select links
let tLinks=document.querySelector(".links");
toggleBtn.onclick=function(e){
    //stop propagation
    e.stopPropagation();
    this.classList.toggle("menu-active");
    tLinks.classList.toggle("open");
};
//click Anywhere out side
document.addEventListener("click",(e)=>{
    if(e.target!==toggleBtn && e.target!==tLinks){
        //check if menu is open
        if(tLinks.classList.contains("open")){
            toggleBtn.classList.toggle("menu-active");
            tLinks.classList.toggle("open");
        }
    }
})
//stop prop on menu
tLinks.onclick=function(e){
    e.stopPropagation();
}