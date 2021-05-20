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

//////////////// variables //////////////
let newRepository;

// when page loads in order to view photos of the recipes
// we need to have Recipes
// we need them to be stored in the recipeRepository
// we need to access the data for recipes
//let newRepository = [];

const tags = { 
  appetizers: ['antipasti', 'salad', 'antipasto', "hor d'oeuvre", 'starter', 'appetizer', 'snack'], 
  breakfast: ['breakfast', 'morning meal','brunch'], 
  lunch: ['salad', 'lunch', 'brunch'],
  dinner: ['main course', 'dinner', 'main dish'], 
  condiments: ['condiment', 'dip', 'spread', 'sauce'],
  sides: ['salad', 'side dish', 'snack'] 
};
//when you click the button, you can get the value of the button
    //use the value "breakfast"
    //use bracket notation tags['breakfast']
    //then you have access to the array of tags under that umbrella
    //iterate over that array of tags
    //see if this recipe.tags includes this tag
    //then return


////////////// functions and event handlers //////////////
homeButton.addEventListener('click', goHome);
favoriteButton.addEventListener('click', displayFavorites);
queueButton.addEventListener('click', displayQueue);

window.addEventListener('load', pageLoad)
// homeButton.addEventListener('click', goHome);
// favoriteButton.addEventListener('click', displayFavorites);
// queueButton.addEventListener('click', displayQueue);

function pageLoad() {
  const recipeDataArray = makeRecipeInstances();
  newRepository = addRecipesToRepository(recipeDataArray);
  // return newRepository
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





