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

const courseChooser = document.getElementById('courseChooser');
const sortByCourseHeader = document.getElementById('sortByCourseHeader');

const homeButton = document.getElementById('homeButton');
const favoriteButton = document.getElementById('favoriteButton');
const queueButton = document.getElementById('queueButton');
const addToQueueButton = document.getElementById('queueButton');

const browseMeals = document.getElementById('browseMeals');
const allMeals = document.getElementById('allMeals');
const browseHeader = document.getElementById('browseHeader');

//recipe page qs
const recipeName = document.getElementById('recipeName');
const recipeImage = document.getElementById('recipeImage');
const recipeTags = document.getElementById('recipeTags');
const ingredientRow = document.getElementById('ingredientRow');
const ingredientTotal = document.getElementById('ingredientTotal');
const recipeInstructions = document.getElementById('recipeInstructions');

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

allMeals.addEventListener('click', clickRecipeCard);


////////////// functions and event handlers //////////////
function pageLoad() {
  const recipeDataArray = makeRecipeInstances();
  newRepository = addRecipesToRepository(recipeDataArray);
  populateMainPage(newRepository.recipesData);
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

function populateMainPage(someRepository) {
  allMeals.innerHTML = '';
  someRepository.forEach((recipe, index) => {
    allMeals.innerHTML += `
    <article id="${recipe.id}" class="mini-recipe-card recipe-target">
          <img class="mini-recipe-img" src="${recipe.image}">
          <h1 class="recipe-name-mini">${recipe.name}</h1>
            <img class="heart-mini-image" src="./images/heart-empty.png" alt="Empty heart btn">
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
  show([homePage, browseMeals, sortByCourseHeader, courseChooser]);
  hide([recipeDetailPage, favoritesPage, searchResultsPage, queuePage]);
}

function displayQueue() {
  show([queuePage]);
  hide([homePage, recipeDetailPage, favoritesPage, searchResultsPage, browseMeals]);
}

function displayFavorites() {
  show([favoritesPage]);
  hide([homePage, searchResultsPage, recipeDetailPage, browseMeals, queuePage, sortByCourseHeader, courseChooser]);
}

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
  if (button.id === 'condiments') {
    currentTags = tags.condiments
  }
  changeHeaderText(button.id);
  newRepository.filterByTag(currentTags);
  populateMainPage(newRepository.filteredRecipes);
}

function changeHeaderText(id) {
  if (id.charAt(id.length - 1) === 's') {
    browseHeader.innerText = `Browse ${id}`
  } else {
    browseHeader.innerText = `Browse ${id} recipes`
  }
}

//recipe page 
function recipeDetails(recipe) {
  recipeTags.innerHTML = '';
  recipePageImageContainer.id = `${recipe.id}`
  recipeName.innerText = `${recipe.name}`;
  recipeImage.src = `${recipe.image}`;
  displayTags(recipe, recipeTags);
  displayIngredients(recipe);
}

function displayTags(recipe, placement) {
  recipe.tags.forEach(tag => {
    placement.innerHTML += `
    <li class="recipe-tag">${tag}</li>
    `
  })
}

function displayMeasurements(ingredient) {
  ingredientRow.innerHTML += `
  <div class="ingredient-row-spacing">
    <p class="ingredient-row-text">${ingredient.quantity.amount} ${ingredient.quantity.unit} ${name}</p>
    <p id="ingredientRowText"class="ingredient-row-price">$${((ingredient.quantity.amount * ingredient.estimatedCostInCents) / 100)}</p>
  </div>
  `
}

function displayInstructions(recipe) {
  recipeInstructions.innerHTML = ''
  recipe.instructions.forEach(step => {
    recipeInstructions.innerHTML += `
    <section class="recipe-instructions-numbered">
    <p class="recipe-step-number">${step.number}.</p>
    <p>${step.instruction}</p>
    </section>
    `
  })
}

function displayIngredients(recipe) {
  ingredientRow.innerHTML = '';
  recipe.ingredients.forEach(ingredient => {
    displayMeasurements(ingredient);
  })
  displayInstructions(recipe)
}

function showRecipe() {
  show([recipeDetailPage]);
  hide([homePage, sortByCourseHeader, searchResultsPage, browseMeals, queuePage, favoritesPage, courseChooser])
  const targetId = parseInt(event.target.closest('.recipe-target').id);
  const foundRecipe = newRepository.recipesData.find(recipe => targetId === recipe.id);
  recipeDetails(foundRecipe);
}

function clickRecipeCard(event) {
  if (event.target.closest('.recipe-target')) {
    showRecipe();
  }
}



