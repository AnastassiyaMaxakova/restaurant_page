import './style.css';
import americanoImg from '../src/images/americano.webp';
import cappuccinoImg from '../src/images/cappuccino.webp';
import espressoImg from '../src/images/espresso_con_panna.webp';
import latteImg from '../src/images/latte.webp';
import lavender_latteImg from '../src/images/lavender_latte.webp';
import macchiatoImg from '../src/images/macchiato.webp';


function createMenuItem(name,imageSrc){
    const menuItemBox = document.createElement("div");
    menuItemBox.classList.add('menu-item');

    const itemImage = new Image();
    itemImage.src = imageSrc;
    itemImage.alt = `${name}`;

    const itemName = document.createElement("p");
    itemName.textContent = name;

    menuItemBox.appendChild(itemImage);
    menuItemBox.appendChild(itemName);
    
    return menuItemBox;
}

function createMenuSection() {
    const menuSection = document.createElement("div");
    menuSection.classList.add('menu-section');

    menuSection.appendChild(createMenuItem('Americano', americanoImg));
    menuSection.appendChild(createMenuItem('Cappuccino', cappuccinoImg));
    menuSection.appendChild(createMenuItem('Espresso Con Panna', espressoImg));
    menuSection.appendChild(createMenuItem('Latte', latteImg));
    menuSection.appendChild(createMenuItem('Lavender Latte', lavender_latteImg));
    menuSection.appendChild(createMenuItem('Macchiato', macchiatoImg));

    return menuSection;
}

function loadMenuSection() {
    const content = document.getElementById("content");
    content.textContent = '';
    content.appendChild(createMenuSection());
}

export default loadMenuSection;