// require("dotenv").config();

// const endpointDog = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

async function getImages(query) {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=f8S7v61L29ztOLryQpAbtBZQL0Ldk9IP&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  const response = await fetch(endpoint);
  const responseData = await response.json();

  const singleGifImageURL = responseData.data[0].url;

  console.log(`Gif Image URL for ${query}: ${singleGifImageURL}`);
}

//BONUS TASK

const allImagesArray = [];

async function getRandomImage(query) {
  const randomEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=f8S7v61L29ztOLryQpAbtBZQL0Ldk9IP&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

  const response = await fetch(randomEndpoint);
  const responseData = await response.json();

  const responseArray = responseData.data;
  const randomNum = Math.floor(Math.random() * responseArray.length);

  responseArray.forEach((item) => {
    allImagesArray.push(item);
  });

  const randomImageURL = responseData.data[randomNum].images.original.url;

  console.log(`Random Image URL for ${query}: ${randomImageURL}`);
  return randomImageURL;
}

getImages("dog");
getRandomImage("cat");

const button = document.querySelector("button");
const imageContainer = document.querySelector(".image-container");

const handleClick = async () => {
  const randomCatImageURL = await getRandomImage("cat");
  console.log(randomCatImageURL);
  imageContainer.innerHTML = `<img src=${randomCatImageURL}>`;
};

button.addEventListener("click", handleClick);

// Print out value of API key stored in .env file
// console.log(process.env.API_KEY);
