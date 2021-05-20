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

fetch("wcag.json")
  .then((items) => items.json())
  .then((items) => showGuidelines(items));

function showGuidelines(guidelines) {
  // for (let i = 0; i < guidelines.guidelines.length; i++) {
  //   let name = guidelines.guidelines[i].name;
  //   let id = guidelines.guidelines[i].id;

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

 
  guidelines.guidelines.forEach(function(item){
    console.log(item.name)
    console.log(item.id)
let id = item.id
let name = item.name

dispDiv.innerHTML +=
      "<li id='" +
      id +
      "' class='prod'>" +
      "<h2 id='" +
      id +
      "name'>" +
      name +
      "</h2>" + "<i class='fa fa-angle-right fa-2x'></i>"
      "</li>";


  })


}

