import loadHomeSection from "./home.js";
import loadMenuSection from "./menu.js";
import loadContactSection from "./contact.js";
import './style.css';


function startWebpage(){
    loadHomeSection();

    const buttons = document.querySelectorAll('button');
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
