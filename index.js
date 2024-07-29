require("dotenv").config();

const endpointCat = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=cat&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
const endpointDog = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

async function getCatImages(query) {
  const response = await fetch(query);
  const responseData = await response.json();

  const singleGifImageURL = responseData.data[0].url;

  console.log("Cat image: ", singleGifImageURL);
}

async function getDogImages(query) {
  const response = await fetch(query);
  const responseData = await response.json();

  const singleGifImageURL = responseData.data[0].url;

  console.log("Dog image: ", singleGifImageURL);
}

//BONUS

const allCatsArray = [];

async function getRandomCatImage(query) {
  const response = await fetch(query);
  const responseData = await response.json();

  const randomNum = Math.floor(Math.random() * 25);

  const responseArray = responseData.data;
  responseArray.forEach((cat) => {
    allCatsArray.push(cat);
  });

  //   console.log(allCatsArray.length)

  const randomCatImageURL = responseData.data[randomNum].url;

  console.log("Random cat image: ", randomCatImageURL);
}

getCatImages(endpointCat);
getDogImages(endpointDog);
getRandomCatImage(endpointCat);

// Print out value of API key stored in .env file
// console.log(process.env.API_KEY);
