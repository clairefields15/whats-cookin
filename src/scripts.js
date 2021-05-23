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

const browseRecipesSection = document.getElementById('browseRecipesSection');
const recipeCardGrid = document.getElementById('recipeCardGrid');
const browseHeader = document.getElementById('browseHeader');

const recipeName = document.getElementById('recipeName');
const recipeImage = document.getElementById('recipeImage');
const recipeTags = document.getElementById('recipeTags');
const ingredientRow = document.getElementById('ingredientRow');
const ingredientTotal = document.getElementById('ingredientTotal');
const recipeInstructions = document.getElementById('recipeInstructions');
const recipePageImageContainer = document.getElementById('recipePageImageContainer');
const searchResultGrid = document.getElementById('searchResultRecipes');

const searchBar = document.getElementById('searchBar');

//////////////// variables //////////////
let newRepository, user;

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

recipeCardGrid.addEventListener('click', clickRecipeCard);
searchResultGrid.addEventListener('click', clickRecipeCard)

searchBar.addEventListener('keypress', function() {
  if (event.keyCode === 13) {
    filterSearchResults(event)
  }
});
  
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
  recipeCardGrid.innerHTML = '';
  someRepository.forEach((recipe) => {
    recipeCardGrid.innerHTML += `
    <article id="${recipe.id}" class="mini-recipe-card recipe-target">
          <img class="mini-recipe-img" alt="Picture of ${recipe.name}" src="${recipe.image}">
          <h1 class="recipe-name-mini">${recipe.name}</h1>
            <img class="heart-mini-image inactive heart-target" src="./images/heart-empty.png" alt="Empty heart btn">
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
  show([homePage, browseRecipesSection, sortByCourseHeader, courseChooser]);
  hide([recipeDetailPage, favoritesPage, searchResultsPage, queuePage]);
}

function displayQueue() {
  show([queuePage]);
  hide([homePage, recipeDetailPage, favoritesPage, searchResultsPage, browseRecipesSection]);
}

function displayFavorites() {
  show([favoritesPage]);
  hide([homePage, searchResultsPage, recipeDetailPage, browseRecipesSection, queuePage, sortByCourseHeader, courseChooser]);
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
  populateMainPage(newRepository.filteredByTag);
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
  recipePageImageContainer.id = `${recipe.id}`
  recipeName.innerText = `${recipe.name}`;
  recipeImage.src = `${recipe.image}`;
  let totalCost = recipe.getRecipeCost();
  ingredientTotal.innerText = `${totalCost}`
  displayTags(recipe);
  displayInstructions(recipe)
  displayMeasurements(recipe)
}

function displayTags(recipe) {
  recipeTags.innerHTML = '';
  recipe.tags.forEach(tag => {
    recipeTags.innerHTML += `
    <li class="recipe-tag">${tag}</li>
    `
  })
}

function displayMeasurements(recipe) {
  ingredientRow.innerHTML = '';
  let allIngredientInfo = recipe.getIngredients();
  allIngredientInfo.forEach(ingredient => {
    return ingredientRow.innerHTML += `
    <div class="ingredient-row-spacing">
      <p class="ingredient-row-text">${ingredient.amount} ${ingredient.unit} ${ingredient.name}</p>
      <p id="ingredientRowText"class="ingredient-row-price">$${((ingredient.amount * ingredient.estimatedCostInCents) / 100)}</p>
    </div>
    `
  })

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

function showRecipe(event) {
  show([recipeDetailPage]);
  hide([homePage, sortByCourseHeader, searchResultsPage, browseRecipesSection, queuePage, favoritesPage, courseChooser])
  const targetId = parseInt(event.target.closest('.recipe-target').id);
  const foundRecipe = newRepository.recipesData.find(recipe => {
    return targetId === recipe.id});
  recipeDetails(foundRecipe);
}

function clickRecipeCard(event) {
  if (event.target.closest('.recipe-target')) {
    showRecipe(event);
  } else if (event.target.closest('.heart-target')) {
    favoriteRecipe();
  }
}


//search and display recipes
function filterSearchResults(event) {
  event.preventDefault()
  show([searchResultsPage]);
  hide([homePage, sortByCourseHeader, browseRecipesSection, queuePage, favoritesPage, courseChooser, recipeDetailPage])
  let input = [];
  let lowerCaseInput = searchBar.value.toLowerCase();
  let lowerCaseNoSpacesInput = lowerCaseInput.replace(/  +/g, ' ');
  input.push(lowerCaseNoSpacesInput)
  newRepository.filterByName(input)
  newRepository.filterByIngredients(input)
  populateSearchPage(newRepository)
  searchBar.value = ''
}

function populateSearchPage(someRepository) {
  searchResultGrid.innerHTML = '';
  const searchByName = someRepository.filteredByName;
  const searchByIngredient = someRepository.filteredByIngredient;
  const searchAll = [searchByName, searchByIngredient]
  searchAll.forEach(type => {
    type.forEach((recipe) => {
      searchResultGrid.innerHTML += `
      <article id="${recipe.id}" class="mini-recipe-card recipe-target">
            <img class="mini-recipe-img" alt="Picture of ${recipe.name}" src="${recipe.image}">
            <h1 class="recipe-name-mini">${recipe.name}</h1>
              <img class="heart-mini-image" src="./images/heart-empty.png" alt="Empty heart btn">
        </article>
      `;
    });
  })
}

  // function favoriteRecipe(event) {
  //   event.preventDefault();
  //   if (event.target.classList.contains('inactive'))
  // }

// edge case scenarios:
// need to be able to search pork chop and only see one (pork chop is a name and an ingredient)
// need to add some error handling (lowercase, weird spaces, only part of the name etc.)
// When user clicks on any link from result and navigates back, then result should be maintained
// When user start typing word in text box it should suggest words that matches typed keyword
// Search keyword should get highlighted with color in the search results

// test items from data file:
// Maple Dijon Apple Cider Grilled Pork Chops
// Hummus Deviled Eggs
// wheat flour
// cilantro
// artichokes

