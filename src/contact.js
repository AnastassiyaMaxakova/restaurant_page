function createContactSection() {
    const contactSection = document.createElement('div');
    contactSection.classList.add('contact-section');

    const title = document.createElement('h2');
    title.textContent = 'Contact Us';

    const customerTitle = document.createElement('p');
    customerTitle.textContent = 'If you have general questions or concerns about CoffeeShop, please contact our Customer Contact Center ';

    const customerSerLink = document.createElement('a');
    customerSerLink.href = '#';
    customerSerLink.innerHTML = 'customerservice.coffeeshop.shop';

    customerTitle.appendChild(customerSerLink);

    const mediaInfo = document.createElement('h3');
    mediaInfo.textContent = 'Media Contacts';

    const mediaEmail = document.createElement('p');
    mediaEmail.textContent = 'Email: press@coffeeshop.shop';

    const mediaPhone = document.createElement('p');
    mediaPhone.textContent = 'Phone: +1234 567 890';

    const addressInfo = document.createElement('h3');
    addressInfo.textContent = 'Our Address';

    const address = document.createElement('p');
    address.textContent = '1124 Pike St.';

    contactSection.appendChild(title);

    contactSection.appendChild(createH3Element('Customer Service'));
    contactSection.appendChild(customerTitle);

    contactSection.appendChild(createH3Element("Media Contacts"));
    contactSection.appendChild(createPElement("Email: press@coffeeshop.shop"));
    contactSection.appendChild(createPElement("Phone: +1234 567 890"));

    contactSection.appendChild(createH3Element("Our Address"));
    contactSection.appendChild(createPElement("1124 Pike St."));

}

function createH3Element(description){
    const h3Elem = document.createElement('h3');
    h3Elem.textContent = description;

    return h3Elem;
}

function createPElement(description){
    const pElem = document.createElement('p');
    pElem.textContent = description;

    return pElem;
}

function loadContactSection() {
    const content = document.getElementById("content");
    content.textContent = '';
    content.appendChild(createContactSection());
}

export default loadContactSection;