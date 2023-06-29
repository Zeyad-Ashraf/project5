// if condition is a property in localstorage or not
let loc=localStorage.getItem("color-option");
if(loc !==null){
    document.documentElement.style.setProperty('--main-color',localStorage.getItem("color-option"));
    document.querySelectorAll(".colors-list li").forEach(element=>{
        element.classList.remove("active");
        if(element.dataset.color===localStorage.getItem("color-option")){
            element.classList.add("active");
        }
    });
    
}
//random background option
let backgroundOption =true;
// variable to control the interval
let backgroundIterval;
//check if there's local storage background item
let backgroundLocalItem=localStorage.getItem("background-option");
if(backgroundLocalItem !==null){
    if(backgroundLocalItem==='true'){
        backgroundOption=true;
    }else{
        backgroundOption=false;
    }
    //remove active class from all spans
    document.querySelectorAll(".random-backgrounds span").forEach(element=>{
        element.classList.remove("active");
    });
    if(backgroundLocalItem==='true'){
        document.querySelector(".yes").classList.add("active");
    }else{
        document.querySelector(" .no").classList.add("active");
    }
}
//toggle spin class on icon
document.querySelector(".toggle-settings i").onclick = function () {
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");
}

//switch colors
const colorsLi=document.querySelectorAll(".colors-list li");
colorsLi.forEach(li => {
    li.addEventListener("click",(e)=>{
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color);
        localStorage.setItem("color-option",e.target.dataset.color);
    });
});

//switch backgrounds
const backElement=document.querySelectorAll(".random-backgrounds span");
backElement.forEach(span => {
    span.addEventListener("click",(e)=>{
        e.target.parentElement.querySelectorAll(".active").forEach(element=>{
            element.classList.remove("active");
        });
        e.target.classList.add("active");
        if(e.target.dataset.background==='yes'){
            backgroundOption=true;
            randmizeImgs();
            localStorage.setItem("background-option",true);
        }else{
            backgroundOption=false;
            clearInterval(backgroundIterval);
            localStorage.setItem("background-option",false);
        }
    });
});

// select landing page element
let landingPage=document.querySelector(".landing-page");
//get array of imgs
let imgsArray=["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];



function randmizeImgs(){
    if(backgroundOption===true){
        backgroundIterval=setInterval(() => {
            //get random number
            let randomNumber=Math.floor(Math.random()*imgsArray.length);
            // change bckgourd img url
            landingPage.style.backgroundImage='url("imgs/' + imgsArray[randomNumber]+ '")';
        },8000);
    }
}
randmizeImgs();