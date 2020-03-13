// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function CardComponent(response) {
    const cardDiv = document.createElement('div');
    const headliner = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const imgSrc = document.createElement('img');
    const footerSpan = document.createElement('footer');

    cardDiv.classList.add('card');
    headliner.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');
    
    headliner.textContent = response.headline;
    imgSrc.setAttribute('src', response.authorPhoto);
    footerSpan.textContent = `By ${response.authorName}`;

    cardDiv.appendChild(headliner);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    imgDiv.append(imgSrc);
    authorDiv.appendChild(footerSpan);

    return cardDiv;

}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(Object.values(response.data.articles));
    
    let cardData = Object.values(response.data.articles);
    cardData.forEach(x =>{
        x.forEach(item => {
            cardContainer.append(CardComponent(item));
        });
    });
    
})
.catch(error => {
    console.log('error' + error);
});

let cardContainer = document.querySelector('.cards-container');