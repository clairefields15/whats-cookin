import RecipeRepository from "./classes/RecipeRepository";
import Recipe from "./classes/Recipe"
import Ingredient from "./classes/Ingredient"


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

//////////////// variables //////////////
let recipe = new Recipe();
let recipeRepository = new RecipeRepository();
let ingredients = new Ingredients();


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
window.addEventListener('load', )


function hide(elements) {
  for (var i = 0; i < elements.length; i++) {
    element = elements[i];
    element.classList.add("hidden");
  }
};

function show(elements) {
  for (var i = 0; i < elements.length; i++) {
    element = elements[i];
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

