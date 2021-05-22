// fetch("demo.json")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     // game.total = data.length; //json data for game
//     // game.val = 0; //question we are on
//     // game.score = 0;
//     // game.arr = data;

//     data.forEach(function (el) {
//         console.log(el);
//     });
//     createQuestion();
//   });

// fetch("wcag.json")
// .then(function (res) {
//   return res.json();
// })
// .then(function (data) {
//   console.log(data);
//   // game.total = data.length; //json data for game
//   // game.val = 0; //question we are on
//   // game.score = 0;
//   // game.arr = data;

//   data.forEach(function (el) {
//       console.log(el);
//   });
//   createQuestion();
// });

let dispDiv = document.getElementById("dispGuidelines");

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

