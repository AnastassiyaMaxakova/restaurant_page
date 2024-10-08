import './style.css';
import coffeeGif from './images/coffee-animated-gif-5.gif';

function createHomeSection(){
    const homeSection = document.createElement("div");
    homeSection.classList.add("home-section");

    const aboutInfo = document.createElement("p");
    aboutInfo.textContent = "We serve a range of coffee made from the finest coffee beans, roasted right here, and our baristas really know their beans.With their superior technical knowledge and a passion for making amazing coffee they will make you the perfect cup of coffee."

    const coffeeImg = new Image();
    coffeeImg.src = coffeeGif;
    coffeeImg.classList.add('home-img')
    coffeeImg.alt = "Coffee Cup"

    const orderInfo = document.createElement("p");
    orderInfo.textContent = "Visit us or ";

    const orderLink = document.createElement("a");
    orderLink.href = "#";
    orderLink.innerHTML = "Order Online";

    orderInfo.appendChild(orderLink);

    homeSection.appendChild(aboutInfo);
    homeSection.appendChild(coffeeImg);
    homeSection.appendChild(orderInfo);
    
    
    return homeSection;
}

function loadHomeSection() {
    const content = document.getElementById("content");
    content.textContent = '';
    content.appendChild(createHomeSection());
}

export default loadHomeSection;