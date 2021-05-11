const YOUR_APP_ID = "9d4b0f07"
const YOUR_APP_KEY = "9fd51e02682bd21403e0cb0ceca95fb8"

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

function throughRecipes() {
  for (let i=0; i<recipe.hits.length; i++) {
    console.log (recipe.hits[i].recipe.totalWeight);
  }
}
