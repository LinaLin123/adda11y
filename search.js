// const searchBar = document.getElementById("searchBar")
// console.log(searchBar)

// searchBar.addEventListener('keyup',(e) => {
//     console.log(e.target.value)
// })

// ///////
// const charactersList = document.getElementById('charactersList');
// const searchBarInput = document.getElementById('searchBar');
// let hpCharacters = [];
// const searchWrapper = document.querySelector('.searchWrapper');

// const searchBtn = document.getElementById('myBtn');


// searchBarInput.addEventListener('keyup', (event) => {

//       const searchString = event.target.value.toLowerCase();

//     const filteredCharacters = hpCharacters.filter((character) => {
//         return (
//             character.name.toLowerCase().includes(searchString) ||
//             character.description.toLowerCase().includes(searchString)
//         );
//     });
//     displayCharacters(filteredCharacters);
// });

// const loadCharacters = async () => {
//     try {
//         const res = await fetch('https://my-a11y-api.herokuapp.com/guidelines');
//         hpCharacters = await res.json();
//         displayCharacters(hpCharacters);
//     } catch (err) {
//         console.error(err);
//     }
// };

// const displayCharacters = (characters) => {
//     // if(!characters.length) {
//     //     return searchWrapper.classList.remove("searchWrapper")
//     // }
//     const htmlString = characters
//         .map((character) => {
//             return `
//             <div tabindex="0">
//             <li class="character">
//               <a href="${character.url}">  <h2>${character.name}</h2>
//                 <p> ${character.description}</p>
//                 <img src="${character.image}"></img>
//                 </a>
//             </li>
//             </div>
//         `;
//         })
//         .join('');
//         // searchWrapper.classList.add('searchWrapper');
//     charactersList.innerHTML = htmlString;
    
// };

// loadCharacters();
/////////

// const buttonSubmit = document.getElementById('myBtn');

// buttonSubmit.addEventListener('click', (e) => {

// console.log("klickad")

// });


///////
const urlParams = new URLSearchParams(window.location.search);
const search = urlParams.get('search');

console.log(search)

const charactersList = document.getElementById('charactersList');
const searchBarInput = document.getElementById('searchBar');
let hpCharacters = [];
const searchWrapper = document.querySelector('.searchWrapper');

const searchBtn = document.getElementById('myBtn');

searchBarInput.value= search

console.log(searchBtn)

console.log(searchBarInput.value)

searchBtn.addEventListener('click', (event) => {
    const searchString = searchBarInput.value.toLowerCase();
    console.log(event)
    filterResult(searchString)
})


searchBarInput.addEventListener('keydown', (event) => {
   console.log(event.code) 
   if (event.code === "Enter") {
    const searchString = searchBarInput.value.toLowerCase();
   
    filterResult(searchString)
   }

})


// searchBarInput.addEventListener('keyup', (event) => {

//       const searchString = event.target.value.toLowerCase();
    
//       filterResult(searchString)
 
// });

function filterResult(searchString) {

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.description.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
}

const loadCharacters = async () => {
    try {
        const res = await fetch('https://my-a11y-api.herokuapp.com/guidelines');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
        if (search !== ""){
            filterResult(search)
         }
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    // if(!characters.length) {
    //     return searchWrapper.classList.remove("searchWrapper")
    // }
    const htmlString = characters
        .map((character) => {
            return `
            <div class="searchItemWrapper" tabindex="0">
            <li class="searchItem">
              <a href="${character.url}">  <h2 class="topSection">${character.name}</h2>
                <p class="bottomSection"> ${character.description}</p><span class="triangleIcon><i class="fas fa-chevron-right"></i></span>
                </a>
            </li>
            </div>
        `;
        })
        .join('');
        // searchWrapper.classList.add('searchWrapper');

        const hits = characters.length === 1 ? "träff" : "träffar"

    charactersList.innerHTML = `<span>Din sökning gav ${characters.length} ${hits} </span> <br>`+htmlString;

    
};



loadCharacters();
