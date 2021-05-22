const urlParams = new URLSearchParams(window.location.search);
const search = urlParams.get('search');

console.log(search)

const guidelinesList = document.getElementById('guidelinesList');
const searchBarInput = document.getElementById('searchBar');
let wcagGuidelines = [];
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


function filterResult(searchString) {

    const filteredCharacters = wcagGuidelines.filter((guideline) => {
        return (
            guideline.name.toLowerCase().includes(searchString) ||
            guideline.description.toLowerCase().includes(searchString)
        );
    });
    displayGuidelines(filteredCharacters);
}

const loadGuidelines = async () => {
    try {
        const res = await fetch('https://my-a11y-api.herokuapp.com/guidelines');
        wcagGuidelines = await res.json();
        displayGuidelines(wcagGuidelines);
        if (search !== ""){
            filterResult(search)
         }
    } catch (err) {
        console.error(err);
    }
};

const displayGuidelines = (guidelines) => {

    const htmlString = guidelines
        .map((guideline) => {
            return `
            <div class="searchItemWrapper" tabindex="0">
            <li class="searchItem">
              <a href='guideline.html?id=${guideline.id}'> <h2 class="topSection">${guideline.name}<span class='iconArrow'></span></h2> 
                <p class="bottomSection"> ${guideline.description}</p>
                </a>
            </li>
            </div>
        `;
        })
        .join('');
        // searchWrapper.classList.add('searchWrapper');

        const hits = guidelines.length === 1 ? "träff" : "träffar"

    guidelinesList.innerHTML = `<span class="searchResult">Din sökning gav ${guidelines.length} ${hits} </span>`+ htmlString;

    
};



loadGuidelines();
