//==============NEWS=================================================================================
// const ENDPOINT = "https://newsapi.org/v2/everything";
// const API_KEY = "5bbf3b9533cc42078da0e8a834f89482";

// function getNews(query) {
//   return fetch(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`)
//     .then((data) => data.json())
//     .then(({ articles }) => console.log(articles));
// }
// export { getNews };
//--------------------------------------------------------------------------------------------------
// fetch(`${ENDPOINT}?apiKey=${API_KEY}&q=gpt`)
//   .then((data) => data.json())
//   .then(({ articles }) => console.log(articles));

//--------------------------------------------------------------------------------------------------
// fetch(`${ENDPOINT}?q=gpt`, {
//   headers: {
//     "X-Api-Key": API_KEY,
//   }
// })
// .then((data) => data.json())
// .then(({articles}) => console.log(articles));

//================ENGLISH STUDY=====================================================================
const ENDPOINT = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function getWord(query) {
  return fetch(`${ENDPOINT}${query}`)
    .then((data) => data.json())
    
}
export { getWord };