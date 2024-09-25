import '../src/style.css';

function createMenuItem(name,imageName){
    const menuItemBox = document.createElement("div");
    menuItemBox.classList.add('menu-item');

    const itemImage = document.createElement('img');
    itemImage.src = `../src/images/${imageName}.webp`;
    itemImage.alt = `${imageName}`;

    const itemName = document.createElement("p");
    itemName.textContent = name;

    menuItemBox.appendChild(itemImage);
    menuItemBox.appendChild(itemName);
    
    return menuItemBox;
}

function createMenuSection() {
    const menuSection = document.createElement("div");
    menuSection.classList.add('menu-section');

    menuSection.appendChild(createMenuItem('Americano','americano'));
    menuSection.appendChild(createMenuItem('Cappuccino','cappuccino'));
    menuSection.appendChild(createMenuItem('Espresso Con Panna','espresso_con_panna'));
    menuSection.appendChild(createMenuItem('Latte','latte'));
    menuSection.appendChild(createMenuItem('Lavender Latte','lavender_latte'));
    menuSection.appendChild(createMenuItem('Macchiato','macchiato'));

    return menuSection;
}

function loadMenuSection() {
    const content = document.getElementById("content");
    content.textContent = '';
    content.appendChild(createMenuSection());
}

export default loadMenuSection;