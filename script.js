const button = document.querySelector('.btn');

const popup = document.querySelector('.popup-container');

const closePopup = document.querySelector('.popup-close');

// Open the popup
button.addEventListener('click', () => {
    popup.style.display = 'block';
});

// Close the popup
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});
