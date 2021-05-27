let dispDiv = document.getElementById("articlePost");
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get("id");

//Fetchar API:et och skriver ut med showGuidelines
fetch("https://my-a11y-api.herokuapp.com/guidelines")
  .then((items) => items.json())
  .then((items) => showGuidelines(items));

//Genom find metoden hämtar jag rätt riktlinjens id och artikel id och skriver ut id, namn, beskrivning och text till HTML.
function showGuidelines(guidelines) {
  let article = guidelines.find((guideline) => {
    return guideline.id == articleId;
  });

  dispDiv.innerHTML =
    "<div class='articleTitleStyling'><h1 class='articleTitle'>" +
    article.kriterietId +
    " " +
    article.name +
    "</h1></div>" +
    "<div class='articleIngressTextWrapper'><p class='articleIngress'>" +
    article.description +
    "</p>" +
    article.text +
    "</div>";
}


