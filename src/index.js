function displayFeedback(response) {
  new Typewriter("#feedback", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateFeedback(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-queries");
  let apiKey = "4bcdoaaff781057betcf5af877a53545";
  let prompt = `User Instructions: Generate answers to ${instructionsInput.value}`;
  let context =
    "You are punctual in english, intelligent and Knowledgeable on so many concepts and you love answering queries. Your mission is to respond to users queries. Please punctuate and space your paragaraphs using <br/>. The answers have to be knowledgeable and can be opinated an basing on the queries you receive. Please Make sure to answer the user query fully. I need a sign off of 'Shecodes AI'in the css color salmon. Please justify the answers in terms of text aligment. Thank you for your hard work.";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let feedbackElement = document.querySelector("#feedback");
  feedbackElement.classList.remove("hidden");
  feedbackElement.innerHTML = `<div class = "generating"> ⌛Generating answers to ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayFeedback);
}
let feedbackFormElement = document.querySelector("#feedback-generator-form");
feedbackFormElement.addEventListener("submit", generateFeedback);
