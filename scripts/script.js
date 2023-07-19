// import { getWord } from "./api.js";

// const refs = {
//   form: document.getElementById("form"),
//   wrapper: document.getElementById("wrapper"),
// };

// refs.form.addEventListener("submit", onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
//   const form = e.currentTarget;
//   const inputValue = form.elements.news.value;
//   getWord(inputValue)
//     .then((data) => {
//       console.log(data);

//       if (data.length === 0) throw new Error("No data!");

//       const markup = data.reduce((markup, dat) => markup + createMarkup (dat), "")
//       // console.log(markup)
//       updateWord(markup)
//     })
//     .catch(onError)
//     .finally(() => form.reset);
// }

// function createMarkup({word, phonetic}) {
//   // console.log(dat)
//   return `
//   <div  class="article-card">
//   <h2 class="article-title">${word}</h2>
//   <p class="article-phonetic">${phonetic || "does not sound"}</p>
//   </div>
  
//   `
// }

// function updateWord (markup) {
//   refs.wrapper.innerHTML = markup;
// }

// function onError(err) {
//   console.error(err);
//   updateWord("<p>Not found</p>")
// }



// const result = getWord('assent');

// console.log(result)

import { getWord } from "./api.js";

const refs = {
  form: document.getElementById("form"),
  wrapper: document.getElementById("wrapper"),
};

refs.form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const inputValue = form.elements.news.value;
  getWord(inputValue)
    .then((data) => {
      console.log(data);

      if (data.length === 0) throw new Error("No data!");

      const word = data[0];
      const phonetic = word.phonetic || "does not sound";
      const phoneticsMarkup = word.phonetics.map((phoneticItem) => {
        const audioMarkup = phoneticItem.audio
          ? `<audio controls><source src="${phoneticItem.audio}" type="audio/mpeg"></audio>`
          : "";
        return `<p>${phoneticItem.text}${audioMarkup}</p>`;
      }).join("");

      const meaningsMarkup = word.meanings.map((meaning) => {
        const definitionsMarkup = meaning.definitions.map((definition) => {
          const example = definition.example ? `<em>Example:</em> ${definition.example}` : "";
          return `<li><strong>-</strong> ${definition.definition}<br>${example}</li>`;
        }).join("");
        
        return `<h3>${meaning.partOfSpeech}</h3><ul>${definitionsMarkup}</ul>`;
      }).join("");

      const originMarkup = word.origin ? `<p><strong>Origin:</strong> ${word.origin}</p>` : "";

      const markup = `
        <div class="article-card">
          <h2 class="article-title">${word.word}</h2>
          <p class="article-phonetic">${phonetic}</p>
          ${phoneticsMarkup}
          ${originMarkup}
          ${meaningsMarkup}
        </div>
      `;

      updateWord(markup);
    })
    .catch(onError)
    .finally(() => form.reset());
}

function updateWord(markup) {
  refs.wrapper.innerHTML = markup;
}

function onError(err) {
  console.error(err);
  updateWord("<p>Not found</p>");
}