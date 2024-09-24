import loadHomeSection from "./home.js";
import loadMenuSection from "./menu.js";
import loadContactSection from "./contact.js";

const buttons = document.querySelectorAll('button');

function setActiveBtn(button){
    buttons.forEach((button)=> {
        if (button !== this) {
            button.classList.remove('active');
        }
    });
    button.classList.add('active');
}

function a(button){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button)=> {
        if (button !== this) {
            button.classList.remove('active');
        }
    });
    button.classList.add('active');
}

function startWebpage(){
    setActiveBtn(document.querySelector('button'));
    loadHomeSection();
    
    buttons.forEach((button)=>{
        button.addEventListener("click", (e) => {
            if (e.target.id === "homeBtn") {

                loadHomeSection()
            } 
            else if (e.target.id === "menuBtn") {
                loadMenuSection();
            } 
            else if (e.target.id === "contactBtn") {
                loadContactSection();
            }
        });
});
}

export default startWebpage;


//Fix active button