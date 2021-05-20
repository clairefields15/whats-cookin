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

const tags = { 
  appetizers: ['antipasti', 'salad', 'antipasto', "hor d'oeuvre", 'starter', 'appetizer', 'snack'], 
  breakfast: ['breakfast', 'morning meal','brunch'], 
  lunch: ['salad', 'lunch', 'brunch'],
  dinner: ['main course', 'dinner', 'main dish'], 
  sides: ['salad', 'side dish', 'snack'], 
  condiments: ['condiment', 'dip', 'spread', 'sauce']
};

function filterByTags(button) {
  let currentTags = [];
  if (button.id === 'appetizers') {
    currentTags = tags.appetizers
  }
  if (button.id === 'breakfast') {
    currentTags = tags.breakfast
  }
  if (button.id === 'lunch') {
    currentTags = tags.lunch
  }
  if (button.id === 'dinner') {
    currentTags = tags.dinner
  }
  if (button.id === 'sides') {
    currentTags = tags.sides
  }
  if (button.id ==='condiments'){
    currentTags = tags.condiments
  }
  return currentTags
}

// pass that variable to newRepository.filterByTag(tags) 
// change html to say "browse ${tags}"



////////////// event listeners //////////////
const allCourseButtons = document.querySelectorAll('button').forEach(button => 
  button.addEventListener('click', function () {filterByTags(button)}));

homeButton.addEventListener('click', goHome);
favoriteButton.addEventListener('click', displayFavorites);
queueButton.addEventListener('click', displayQueue);

window.addEventListener('load', pageLoad)
homeButton.addEventListener('click', goHome);
favoriteButton.addEventListener('click', displayFavorites);
queueButton.addEventListener('click', displayQueue);


////////////// functions and event handlers //////////////
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




