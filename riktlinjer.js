let dispDiv = document.getElementById("dispGuidelines");

fetch("https://my-a11y-api.herokuapp.com/guidelines")
  .then((items) => items.json())
  .then((items) => showGuidelines(items));

function showGuidelines(guidelines) {
  guidelines.forEach(function (item) {
    console.log(item.name);
    console.log(item.id);
    let id = item.id;
    let name = item.name;

    dispDiv.innerHTML +=
      "<li id='listItem' tabindex='0' role='riktlinje' " +
      id +
      "' class='prod'>" +
      "<a class='guidelineInnerItem' href='guideline.html?id=" +
      item.id +
      "'>" + 
      "<h2 id='titleItem'" +
      id +
      "name'>" + id + ". "  +
      name + 
      "</h2>" +
      "<span class='iconArrow'></span>";
    "</li>" + "</a>";
  });
}
