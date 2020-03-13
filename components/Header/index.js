// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    const headerDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    dateSpan.textContent = 'SMARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';

    dateSpan.classList.add('date');
    temp.classList.add('temp');
    headerDiv.classList.add('header');

    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(title);
    headerDiv.appendChild(temp);

    return headerDiv;


}

const header = document.querySelector('.header-container');
header.appendChild(Header());
