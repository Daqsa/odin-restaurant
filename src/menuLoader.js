
function addMenu (content) {
    let h1 = document.createElement('h1');
    h1.textContent = 'Unparalleled Food Quality';
    content.appendChild(h1);
    let paragraph = document.createElement('p');
    paragraph.textContent = "At Daqsa Buffet, quality is our top priority. We take immense pride in sourcing the freshest ingredients, ensuring that each dish reaches the table bursting with flavor and goodness. From succulent prime cuts of meat to locally sourced fruits and vegetables, every bite is an ode to the freshest and finest produce Illinois has to offer. Our commitment to quality extends to our seafood selection, which is expertly prepared to provide a delightful and unforgettable taste experience.";
    content.appendChild(paragraph);
}

export { addMenu };