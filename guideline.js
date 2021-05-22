let dispDiv = document.getElementById("articlePost");
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');

fetch("https://my-a11y-api.herokuapp.com/guidelines")
  .then((items) => items.json())
  .then((items) => showGuidelines(items));

function showGuidelines(guidelines) {
  // for (let i = 0; i < guidelines.length; i++) {
  //   let name = guidelines[i].name;
  //   let id = guidelines[i].id;

  //   console.log(name);

  //   // create div for each product with product info, select and submitbtn
  //   dispDiv.innerHTML +=
  //     "<li id='" +
  //     id +
  //     "' class='prod'>" +
  //     "<h2 id='" +
  //     id +
  //     "name'>" +
  //     name +
  //     "</h2>" + "<i class='fa fa-angle-right fa-2x'></i>"
  //     "</li>";
  // }

console.log(guidelines[1].text)
console.log(guidelines[1].text)
console.log(guidelines[1].text)

console.log(guidelines)
textZero = guidelines[0].text
textOne = guidelines[1].text
textTwo = guidelines[2].text


let article = guidelines.find((guideline) => {
  console.log(guideline)
  return guideline.id == articleId
})

dispDiv.innerHTML = article.text


//   guidelines.map(function (item) {
//     console.log(item.name);
//     console.log(item.id);
//     console.log(item.sectionOneText);
//     let id = item.id;
//     let name = item.name;
//     let sectionOneText = item.sectionOneText;
//     dispDiv.innerHTML +=
//       "<li id='" +
//       id +
//       "' class='prod'>" +
//       "<h2 id='" +
//       id +
//       "name'>" +
//       name +
//       "</h2>" +
//       "<i class='fa fa-angle-right fa-2x'></i>"+
//     "</li>"+
//     "<p>" + sectionOneText + "</p>";
//   });
}
