const YOUR_APP_ID = "9d4b0f07";
const YOUR_APP_KEY = "9fd51e02682bd21403e0cb0ceca95fb8";
const searchResult = document.querySelector(".search-result");

let foodToSearch = "";
let recipe;
let requestUrl = "https://api.edamam.com/search?q=" + foodToSearch + "&app_id=9d4b0f07&app_key=9fd51e02682bd21403e0cb0ceca95fb8";

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
  console.log(foodToSearch)

}

async function fetchRecipe(foodToSearch) {
  const response  = await fetch("https://api.edamam.com/search?q=" + foodToSearch + "&app_id=9d4b0f07&app_key=9fd51e02682bd21403e0cb0ceca95fb8");
  recipe  =  await response.json();
  console.log (recipe);
  throughRecipes();
}

function clearForNewSearch() {
  searchResult.innerHTML = ``;
}

function throughRecipes() {
clearForNewSearch();
  for (let i=0; i<recipe.hits.length; i++) {
    let caloriesInteger = parseInt(recipe.hits[i].recipe.calories);
    searchResult.innerHTML += `
    <div class="search-DOM">
    <a href="${recipe.hits[i].recipe.url}" >
      <img class="recipe-pic" src="${recipe.hits[i].recipe.image}">
    </a>
    <h3 class="recipe-title" >${recipe.hits[i].recipe.label}</h3>
      <ul class="recipe-info-list">
      <li>Cuisine: ${recipe.hits[i].recipe.cuisineType}</li>
      <li>Dish Type: ${recipe.hits[i].recipe.dishType}</li>
      <li>Calories: ${caloriesInteger} kcal</li>
      </ul>
    </div>
    `
  }
}

// let anchor = document.createElement("a");
// var link = document.createTextNode(recipe.hits[i].recipe.label);
// anchor.appendChild(link);
// anchor.title = (recipe.hits[i].recipe.label);
// anchor.href = (recipe.hits[i].recipe.shareAs);
// document.body.appendChild(anchor);


// let tag = document.createElement("div");
// let text = document.createTextNode(recipe.hits[i].recipe.label)
// tag.appendChild(text);

// let element = document.getElementById("recipe-label");
// element.appendChild(tag)
// console.log (recipe.hits[i].recipe.label);


