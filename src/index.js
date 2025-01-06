function displayPoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer.replace("```html", "").replace("```", ""),
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "e4a0o883f7063taaf10b8438bb5de43f";
    let context =
      "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
    let prompt = `User instructions: Generate an American poem about ${instructionsInput.value}`;
    let apiURL =
      `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

      let poemElement = document.querySelector("#poem");
      poemElement.classList.remove("hidden");
      poemElement.innerHTML = `<div class="generating">⏳ Generating an American poem about ${instructionsInput.value}</div>`;

      axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
