
function addContact (content) {
    let h1 = document.createElement('h1');
    h1.textContent = 'Contact';
    content.appendChild(h1);
    let paragraph = document.createElement('p');
    paragraph.textContent = "999-2222-3333";
    content.appendChild(paragraph);
}

export { addContact };