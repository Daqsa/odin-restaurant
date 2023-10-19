import css from './style.css';
import { addHome } from './homeLoader.js';
import { addMenu } from './menuLoader.js';
import { addContact } from './contactLoader.js'

const content = document.getElementById('content');

const homeNavBar = document.getElementById('home');
homeNavBar.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    addHome(content);
});

const menuNavBar = document.getElementById('menu');
menuNavBar.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    addMenu(content);
});

const contactNavBar = document.getElementById('contact');
contactNavBar.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    addContact(content);
});


addHome(content);
