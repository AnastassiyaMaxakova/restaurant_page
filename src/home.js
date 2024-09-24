function createHomeSection(){
    const home = document.createElement("div");
    home.classList.add("home-section");

    const aboutInfo = document.createElement("p");
    aboutInfo.textContent = "We serve a range of coffee made from the finest coffee beans, roasted right here in Cape Coral, and our baristas really know their beans.With their superior technical knowledge and a passion for making amazing coffee they will make you the perfect cup of coffee."

    const coffeeImg = document.createElement("img");
    coffeeImg.src = "/dist/images/coffee-animated-gif-5.gif";
    coffeeImg.alt = "Coffee Cup"

    const orderInfo = document.createElement("p");
    orderInfo.textContent = "Visit us";

    const orderLink = document.createElement("a");
    orderLink.href = "#";
    orderLink.innerHTML = "Order Online";

    home.appendChild(aboutInfo);
    home.appendChild(coffeeImg);
    home.appendChild(orderInfo);
    orderInfo.appendChild(orderLink);
}

function loadHomeSection() {
    const content = document.getElementById("content");
    content.textContent = '';
    content.appendChild(createHomeSection());
}

export default loadHomeSection;