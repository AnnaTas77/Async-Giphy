require("dotenv").config();

const endpointCat = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=cat&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

async function getCatImages(query) {
  const response = await fetch(query);
  const responseData = await response.json();

  const singleGifImageURL = responseData.data[0].url;

  console.log("Cat image: ", singleGifImageURL);
}

const endpointDog = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

async function getDogImages(query) {
  const response = await fetch(query);
  const responseData = await response.json();

  const singleGifImageURL = responseData.data[0].url;

  console.log("Dog image: ", singleGifImageURL);
}

getCatImages(endpointCat);
getDogImages(endpointDog);

// Print out value of API key stored in .env file
// console.log(process.env.API_KEY);
