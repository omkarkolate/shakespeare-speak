const input = document.querySelector("#input");
const translateBtn = document.querySelector("#translateBtn");
const output = document.querySelector("#output");

// https://api.funtranslations.com/translate/shakespeare.json?text=i%20am%20omakr

translateBtn.addEventListener("click", () => {
  if (input.value) {
    let text = input.value;
    output.innerText = "";

    let encodedUri = encodeURI(
      `https://api.funtranslations.com/translate/shakespeare.json?text=${text}`
    );

    fetch(encodedUri)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.contents.translated);
        output.innerText = data.contents.translated;
      })
      .catch(error => {
        console.error(`There has been a problem with your fetch operation for resource "${encodedUri}": ` + error.message)
        output.style.color = "red";
        output.innerText = "Error: 404 | Something Went wrong 🙄";
      });
  }
});