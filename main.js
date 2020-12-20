const input = document.querySelector("#input");
const translateBtn = document.querySelector("#translateBtn");
const output = document.querySelector("#output");

// https://api.funtranslations.com/translate/shakespeare.json?text=i%20am%20omakr

translateBtn.addEventListener("click", () => {
  if (input.value) {
    let text = input.value;
    output.innerText = "";
    fetch(
      `https://api.funtranslations.com/translate/shakespeare.json?text=${text}`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.contents.translated);
        output.innerText = data.contents.translated;
      });
  }
});