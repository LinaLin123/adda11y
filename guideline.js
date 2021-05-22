let dispDiv = document.getElementById("articlePost");
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');

fetch("https://my-a11y-api.herokuapp.com/guidelines")
  .then((items) => items.json())
  .then((items) => showGuidelines(items));

function showGuidelines(guidelines) {

let article = guidelines.find((guideline) => {
  console.log(guideline)
  return guideline.id == articleId
})

dispDiv.innerHTML = "<h2>" + article.name + "</h2>" + "<p>" + article.description + "</p>" + article.text

}
