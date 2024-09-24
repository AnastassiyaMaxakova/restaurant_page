import loadHomeSection from "./home.js";
import loadMenuSection from "./menu.js";
import loadContactSection from "./contact.js";

function setActiveBtn(button){
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
    loadHomeSection()
}

export default startWebpage;