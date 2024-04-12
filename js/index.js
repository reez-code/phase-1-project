// Every Headline
const BASE_URL =
  "https://newsapi.org/v2/everything?apiKey=639ca18fdafc424ab5a8821fe549513d&q=keyword";
// Top Headlines
const topHeadlines =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=639ca18fdafc424ab5a8821fe549513d";
const requestOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

fetch(BASE_URL, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    result.articles.forEach((items) => {
      moreNews(items);
    });
  })
  .catch((error) => console.error(error));

fetch(topHeadlines, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    // console.log(result);
    // console.log(result.articles[0]);
    updateCardInfo(result.articles[0]);
    result.articles.forEach((items) => {
      if (items !== result.articles[0]) {
        // console.log(items);
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
  secondSet.className = "card mb-3";
  secondSet.innerHTML = `<img src=${articles.urlToImage} class=card-img-top alt=.../> <div class=card-body><h5 class=card-title id=second>${articles.title}</h5><p class=card-text>${articles.description}</p><p>For More Info Visit: <a href=${articles.url} target="_blank">${articles.source["name"]}</a></p><p class=card-text><small class=text-body-secondary>Last updated 3 mins ago</small></p></div>`;
  // secondSet.innerHTML = `<div class=col><div class=card><img src=${articles.urlToImage} class=card-img-top alt=.../> <div class=card-body><h5 class=card-title id=second>${articles.title}</h5><p class=card-text>${articles.description}</p><p>For More Info Visit: <a href=${articles.url} target="_blank">${articles.source["name"]}</a></p></div></div></div>`;
  selectDiv.append(secondSet);
}

function moreNews(news) {
  const selectDiv = document.querySelector("#more-news");
  const addCards = document.createElement("div");
  addCards.className = "col";
  addCards.innerHTML = `<div class=card><img src=${news.urlToImage} class=card-img-top alt=.../> <div class=card-body><h5 class=card-title id=second>${news.title}</h5><p class=card-text>${news.description}</p><p>For More Info Visit: <a href=${news.url} target="_blank">${news.source["name"]}</a></p></div></div>`;
  selectDiv.append(addCards);
}
