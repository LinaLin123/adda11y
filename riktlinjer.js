let dispDiv = document.getElementById("dispGuidelines");

fetch("https://my-a11y-api.herokuapp.com/guidelines")
  .then((items) => items.json())
  .then((items) => showGuidelines(items));

function showGuidelines(guidelines) {
 
  guidelines.forEach(function(item){
    console.log(item.name)
    console.log(item.id)
let id = item.id
let name = item.name

dispDiv.innerHTML +=
      "<a href='guideline.html?id="+item.id+"'>" + "<li id='listItem'" +
      id +
      "' class='prod'>" +
      "<h2 id='titleItem'" +
      id +
      "name'>" +
      name +
      "</h2>" + "<i class='fa fa-angle-right fa-2x'></i>"
      "</li>" +"</a>";


  })

}

