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
    // console.log(result);
    // console.log(result.articles[0]);
    updateCardInfo(result.articles[0]);
    result.articles.forEach((items) => {
      if (items !== result.articles[0]) {
        console.log(items);
        secondSetofCards(items);
      }
      //
    });
  })
  .catch((error) => console.error(error));

function updateCardInfo(article) {
  document.querySelector("#card-image").src = article.urlToImage;
  document.querySelector(".card-title").textContent = article.title;
  document.querySelector(".card-text").textContent = article.description;
  document.getElementById("more-info").href = article.url;
}
function secondSetofCards(articles) {
  // accesses the second content and creates cards
  const selectDiv = document.querySelector("#list");
  const secondSet = document.createElement("div");
  secondSet.className = "col";
  secondSet.innerHTML = `<div class=col><div class=card><img src=${articles.urlToImage} class=card-img-top alt=.../> <div class=card-body><h5 class=card-title id=second>${articles.title}</h5><p class=card-text>${articles.description}</p></div></div></div>`;
  selectDiv.append(secondSet);
}
