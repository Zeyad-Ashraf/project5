// calc scroll
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
    // skills offset top
    let skillsOffsetTOP = ourSkills.offsetTop;
    //  skills Outer height 
    let skillsOuterHeight = ourSkills.offsetHeight;
    //window height 
    let windowHeight = this.innerHeight;
    // window scroll top
    let windowScrollTop = 1299;
    if (windowScrollTop > (skillsOffsetTOP + skillsOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }
};
//create popup with the image
let ourGallery = document.querySelectorAll(".gallary img");
ourGallery.forEach(img => {
    img.addEventListener("click", (e) => {
        //create overlay
        let overLay = document.createElement("div");
        // add class to overlay
        overLay.className = 'popup-overlay';
        // append overlay to the body
        document.body.appendChild(overLay);
        //create popup
        let popupBox = document.createElement("div");
        // add class to the popup box
        popupBox.className = 'popup-box';
        //add alt 
        if (img.alt !== null) {
            //create heading
            let imgHeading = document.createElement("h3");
            //create text for heading 
            let imgText = document.createTextNode(img.alt);
            //append the text to the heading 
            imgHeading.appendChild(imgText);
            // adding total to the popup box
            popupBox.appendChild(imgHeading);
        }
        //create the image
        let popupImage = document.createElement("img");
        // change the source from the real source in google
        popupImage.src = img.src;
        // add image to popup box
        popupBox.appendChild(popupImage);
        //append the popup box to body
        document.body.appendChild(popupBox);
        //create the close span
        let closeButton = document.createElement("span");
        //create the close button text
        let closeButtonText = document.createTextNode("x");
        //append it the close button
        closeButton.appendChild(closeButtonText);
        //add ckass to the close button
        closeButton.className = 'close-button';
        //add close button to popup box
        popupBox.appendChild(closeButton);
    });

});
//close popup
document.addEventListener("click", (e) => {
    if (e.target.className === 'close-button') {
        //remove the current popup
        e.target.parentNode.remove();
        //remove overlay
        document.querySelector(".popup-overlay").remove();
    }
});