import RestaurantImage from './restaurant.jpg';


function addHome(content) {
    let header1 = document.createElement('h1');
    header1.textContent = 'Daqsa Buffet';
    content.appendChild(header1);
    let buffetImg = document.createElement('img');
    buffetImg.src = RestaurantImage;
    content.appendChild(buffetImg);
    let header3 = document.createElement('h3');
    header3.textContent = "Discover the Exquisite Delights of Daqsa Buffet";
    content.appendChild(header3);
    let paragraph = document.createElement('p');
    paragraph.textContent = "Looking for a dining experience that tantalizes your taste buds with an array of delectable dishes? Look no further than Daqsa Buffet, the culinary gem nestled in the heart of Illinois. From the moment you step inside, you'll be captivated by the food quality, variety, and the expertise of the finest chefs in the state.";
    content.appendChild(paragraph);
}

export { addHome };