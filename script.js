// Function to fetch a random cat image from The Cat API
const fetchCatImage = async () => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    return data[0].url;  // Returns the URL of the cat image
  } catch (error) {
    console.error("Error fetching cat image:", error);
    return './catpics/default-cat.jpg'; // Fallback image if the API call fails
  }
};

// Function to change the cat image
const changeCatImage = async () => {
  const catImageUrl = await fetchCatImage();
  const catImageElement = document.querySelector('.cat-image');
  catImageElement.src = catImageUrl;
};

// Function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Function to change background color
const changeBackgroundColor = () => {
  const color = getRandomColor();
  document.body.style.backgroundColor = color;
};

// Event listener for the color change button
document.getElementById('colorBtn').addEventListener('click', changeBackgroundColor);

// Event listener for changing cat image on box click
let boxes = document.querySelectorAll('.box');
boxes.forEach(function(box) {
  box.addEventListener('click', changeCatImage);
});
