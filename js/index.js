// Every Headline
const BASE_URL =
  "https://newsapi.org/v2/everything?apiKey=639ca18fdafc424ab5a8821fe549513d&q=keyword";
// Top Headlines
const topHeadlines =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=639ca18fdafc424ab5a8821fe549513d";
const requestOptions = {
  method: "GET",
  redirect: "follow",
};

// fetch(BASE_URL, requestOptions)
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

fetch(topHeadlines, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    console.log(result.articles[0]);
    updateCardInfo(result.articles[0]);
  })
  .catch((error) => console.error(error));

function updateCardInfo(article) {
  document.querySelector("#card-image").src = article.urlToImage;
  document.querySelector(".card-title").textContent = article.title;
  document.querySelector(".card-text").textContent = article.description;
  document.getElementById("more-info").href = article.url;
}
