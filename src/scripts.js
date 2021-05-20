import RecipeRepository from "./classes/RecipeRepository";
import Recipe from "./classes/Recipe"
import Ingredient from "./classes/Ingredient"
import { recipeData } from "./data/recipes"

//////////////// query selectors //////////////
const homePage = document.getElementById('homePage');
const queuePage = document.getElementById('queuePage');
const favoritesPage = document.getElementById('favoritesPage');
const recipeDetailPage = document.getElementById('recipeDetailPage');
const searchResultsPage = document.getElementById('searchResultsPage');

const homeButton = document.getElementById('homeButton');
const favoriteButton = document.getElementById('favoriteButton');
const queueButton = document.getElementById('queueButton');

const browseMeals = document.getElementById('browseMeals');
const allMeals = document.getElementById('allMeals');

const appetizerButton = document.getElementById('appetizer')

//////////////// variables //////////////
let newRepository;

const tags = { 
  appetizers: ['antipasti', 'salad', 'antipasto', "hor d'oeuvre", 'starter', 'appetizer', 'snack'], 
  breakfast: ['breakfast', 'morning meal','brunch'], 
  lunch: ['salad', 'lunch', 'brunch'],
  dinner: ['main course', 'dinner', 'main dish'], 
  condiments: ['condiment', 'dip', 'spread', 'sauce'],
  sides: ['salad', 'side dish', 'snack'] 
};

////////////// functions and event handlers //////////////
homeButton.addEventListener('click', goHome);
favoriteButton.addEventListener('click', displayFavorites);
queueButton.addEventListener('click', displayQueue);

window.addEventListener('load', pageLoad)
homeButton.addEventListener('click', goHome);
favoriteButton.addEventListener('click', displayFavorites);
queueButton.addEventListener('click', displayQueue);

// filter by tag event listeners
appetizerButton.addEventListener('click', viewAppetizers)

function viewAppetizers() {
  console.log('appetizers')
}

function pageLoad() {
  const recipeDataArray = makeRecipeInstances();
  newRepository = addRecipesToRepository(recipeDataArray);
  populateMainPage(newRepository);
}

function makeRecipeInstances() {
  const recipeDataArray = [];
  recipeData.forEach((recipe, index) => {
    let recipe1 = new Recipe(recipeData[index])
    recipeDataArray.push(recipe1)
  })
  return recipeDataArray
}

function addRecipesToRepository(recipeDataArray) {
  return newRepository = new RecipeRepository(recipeDataArray);
}

function populateMainPage(newRepository) {
  console.log(newRepository.recipesData[0].image)

  const recipes = newRepository.recipesData; 
  recipes.forEach((recipe, index) => {
    allMeals.innerHTML += `
    <article id="${recipe.id}" class="mini-recipe-card">
      <div class="mini-recipe-img-container">
      <img class="mini-recipe-img" src="${recipe.image}">
      <div class="heart-overlay">
        <img src="./images/heart-empty.png" alt="Empty heart btn">
        </div>
      </div>
      <h1 class="recipe-name-mini"> ${recipes[index].name} </h1>
      </article>
    `
  })

}
  
function hide(elements) {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.classList.add("hidden");
  }
};

function show(elements) {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.classList.remove("hidden");
  }
};

function goHome() {
  show([homePage, browseMeals]);
  hide([recipeDetailPage, favoritesPage, searchResultsPage, queuePage]);
}

function displayQueue() {
  show([queuePage]);
  hide([homePage, recipeDetailPage, favoritesPage, searchResultsPage, browseMeals]);
}

function displayFavorites() {
  show([favoritesPage]);
  hide([homePage, searchResultsPage, recipeDetailPage, browseMeals, queuePage]);
}

////// filter by tags //////
//event listeners on all the images
//when you click an image
// if the image id = appetizers
// then go to tags.appetizers
// store that in a variable (tags)
// pass that variable to newRepository.filterByTag(tags) 
// change html to say "browse ${tags}"



